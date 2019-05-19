import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { map } from 'rxjs/operators';
import { DataResponse } from 'src/app/models/data-reponse';
import { HttpClient } from '@angular/common/http';
import { DepositCalcForm } from './models/deposit-calc-form.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  listDepositPeriod() {
    return this.http.post<DataResponse>('mybank/listDepositPeriod', {
        token: this.authService.getToken()
    }).pipe(
        map(res => res && res.data)
    );
  }
  getListDepositProducts(formValue: DepositCalcForm) {
    return of([]);
  }
}
