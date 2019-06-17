import { Injectable } from '@angular/core';
import { CreditCardFilterForm } from './models/credit-card-filter-form.model';
import { CreditCardGroup } from './models/credit-card.model';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/models/data-reponse';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  getListGCardCreditProduct(formValue: CreditCardFilterForm): Observable<CreditCardGroup[]> {
    return this.http.post<DataResponse>('mybank/listGCardCreditProduct', {
      token: this.authService.getToken(),
      ...formValue
  }).pipe(
      map(res => res && res.data)
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
}
