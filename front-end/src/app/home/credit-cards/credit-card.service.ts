import { Injectable } from '@angular/core';
import { CreditCardFilterForm } from './models/credit-card-filter-form.model';
import { CreditCardGroup, CreditCard } from './models/credit-card.model';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { DataResponse } from 'src/app/models/data-reponse';
import { map, finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  compareProductList$ = new ReplaySubject<CreditCard[]>();
  compareProductList: CreditCard[] = [];
  productFilterValue: CreditCardFilterForm;
  loadingProducts$ = new Subject<boolean>();

  constructor(private http: HttpClient, private authService: AuthService) { }
  getListGCardCreditProduct(formValue: CreditCardFilterForm): Observable<CreditCardGroup[]> {
    return this.http.post<DataResponse>('mybank/listGCardCreditProduct', {
      token: this.authService.getToken(),
      ...formValue
  }).pipe(
      map(res => res && res.data),
      finalize(() => this.loadingProducts$.next(false))
  );
  }
  listCardCreditPeriod() {
    return this.http.post<DataResponse>('mybank/listCardCreditPeriod', {
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

getCompareProductList(productIds: number[], formValue: CreditCardFilterForm) {
  console.log(formValue)
  return this.http.post<DataResponse>('mybank/compareCreditCards', {
      token: this.authService.getToken(),
      prodId : productIds,
      prodType : "credit-card",
      loanAmount: formValue && formValue.loanAmount,
      loanPeriod: formValue && formValue.loanPeriod,
      loanCurrencyCode: formValue && formValue.currencyCode
  }).pipe(
      map(res => res && res.data)
  );
}
addProductToCompare(product: CreditCard):void {
    if(!(product && this.compareProductList)) {return;}
    if (this.compareProductList.find(p => p.cdId === product.cdId)) {return;}
    this.compareProductList = [
        ...this.compareProductList,
        product
    ];
  this.compareProductList$.next(this.compareProductList);
}
removeProductFromCompare(product: CreditCard): void {
  if  (!(product && this.compareProductList)) {return; }
  this.compareProductList = this.compareProductList.filter(p => p.cdId  !== product.cdId);
  this.compareProductList$.next(this.compareProductList);
}
getSavedCompareProductList(): Observable<CreditCard[]> {
  return this.compareProductList$.asObservable();
}
}
