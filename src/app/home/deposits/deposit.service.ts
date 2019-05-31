import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { map } from 'rxjs/operators';
import { DataResponse } from 'src/app/models/data-reponse';
import { HttpClient } from '@angular/common/http';
import { DepositCalcForm } from './models/deposit-calc-form.model';
import { of, Observable, ReplaySubject } from 'rxjs';
import { DepositGroup, DepositProduct } from './models/deposit-group.model';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  compareProductList$ = new ReplaySubject<DepositProduct[]>();
  compareProductList: DepositProduct[] = [];
  depositFilterValue: DepositCalcForm;
  constructor(private http: HttpClient, private authService: AuthService) {
  }
  listDepositPeriod() {
    return this.http.post<DataResponse>('mybank/listDepositPeriod', {
        token: this.authService.getToken()
    }).pipe(
      map(res => res && res.data && res.data.map((p) => {
        return {
        period: p.period,
        periodId:p.periodId.toString()
        }
    }))
    );
  }
  getListDepositGroupProducts(formValue: DepositCalcForm): Observable<DepositGroup[]> {
    return this.http.post<DataResponse>('mybank/listGDepositProduct', {
      token: this.authService.getToken(),
      ...formValue
  }).pipe(
      map(res => res && res.data)
  );
  }
  getCompareProductList(productIds: number[], formValue: DepositCalcForm) {
    return this.http.post<DataResponse>('mybank/compareDepositProducts', {
        token: this.authService.getToken(),
        prodId : productIds,
        prodType : "deposit",
        depositAmount: formValue && formValue.depositAmount,
        depositPeriod: formValue && formValue.depositPeriod,
        depositCurrencyCode: formValue && formValue.depositCurrency
    }).pipe(
        map(res => res && res.data)
    );
}
addProductToCompare(product: DepositProduct):void {
    if(!(product && this.compareProductList)) {return;}
    if (this.compareProductList.find(p => p.dpID=== product.dpID)) {return;}
    this.compareProductList = [
        ...this.compareProductList,
        product
    ];
    this.compareProductList$.next(this.compareProductList);
}
removeProductFromCompare(product: DepositProduct): void {
  if  (!(product && this.compareProductList)) {return; }
  this.compareProductList = this.compareProductList.filter(p => p.dpID  !== product.dpID);
  this.compareProductList$.next(this.compareProductList);
}
getSavedCompareProductList(): Observable<DepositProduct[]> {
    return this.compareProductList$.asObservable();
}

}
