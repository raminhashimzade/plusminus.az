import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DebitCardFilterForm } from './models/debit-card-filter-form.model';
import { Observable } from 'rxjs';
import { DebitCardGroup } from './models/debit-card.model';
import { DataResponse } from 'src/app/models/data-reponse';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DebitCardService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getListGCardDebetProduct(formValue: DebitCardFilterForm): Observable<DebitCardGroup[]> {
    return this.http.post<DataResponse>('mybank/listGCardDebetProduct', {
      token: this.authService.getToken(),
      ...formValue
  }).pipe(
      map(res => res && res.data)
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
}
