import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DebitCardFilterForm } from './models/debit-card-filter-form.model';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { DebitCardGroup, DebitCard } from './models/debit-card.model';
import { DataResponse } from 'src/app/models/data-reponse';
import { map, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DebitCardService {
  compareProductList$ = new ReplaySubject<DebitCard[]>();
  compareProductList: DebitCard[] = [];
  productFilterValue: DebitCardFilterForm;
  loadingProducts$ = new Subject<boolean>();
  constructor(private http: HttpClient, private authService: AuthService) { }

  getListGCardDebetProduct(formValue: DebitCardFilterForm): Observable<DebitCardGroup[]> {
    return this.http.post<DataResponse>('mybank/listGCardDebetProduct', {
      token: this.authService.getToken(),
      ...formValue
  }).pipe(
      map(res => res && res.data),
      finalize(() => this.loadingProducts$.next(false))
  );
  }
  listCardDebetPeriod() {
    return this.http.post<DataResponse>('mybank/listCardDebetPeriod', {
        token: this.authService.getToken()
    }).pipe(
        map(res => res && res.data && res.data.map((p) => {
            return {
            period: p.period,
            periodId:p.periodId.toString()
            }
        }))
    );;
}

getCompareProductList(productIds: number[], formValue: DebitCardFilterForm) {
  console.log(formValue)
  return this.http.post<DataResponse>('mybank/compareDebetCards', {
      token: this.authService.getToken(),
      prodId : productIds,
      prodType : "debit-card",
      loanCurrencyCode: formValue && formValue.currencyCode
  }).pipe(
      map(res => res && res.data)
  );
}
addProductToCompare(product: DebitCard):void {
    if(!(product && this.compareProductList)) {return;}
    if (this.compareProductList.find(p => p.cdID === product.cdID)) {return;}
    this.compareProductList = [
        ...this.compareProductList,
        product
    ];
  this.compareProductList$.next(this.compareProductList);
}
removeProductFromCompare(product: DebitCard): void {
  if  (!(product && this.compareProductList)) {return; }
  this.compareProductList = this.compareProductList.filter(p => p.cdID  !== product.cdID);
  this.compareProductList$.next(this.compareProductList);
}
getSavedCompareProductList(): Observable<DebitCard[]> {
  return this.compareProductList$.asObservable();
}
}
