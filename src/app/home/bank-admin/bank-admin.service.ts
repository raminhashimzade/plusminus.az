import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/models/data-reponse';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { CustomerOrder } from './models/customer-order.model';

@Injectable({
  providedIn: 'root'
})
export class BankAdminService {
  token: string;
  bankId: string;
  constructor(private http: HttpClient, private authService: AuthService) { }
  getToken(): string {
    return this.token;
  }
  fetchToken(login: string, password: string): Observable<string> {
    return this.http.post<DataResponse>('mybank/checkBankLogin', {
      token: this.authService.getToken(),
      login,
      password
    })
    .pipe(map(res => {
      this.token = res && res.data.token;
      this.bankId = res && res.data.bankId;
      return this.token;
    }))
  }
  getOrderList(): Observable<CustomerOrder[]>{
    return this.http.post<DataResponse>('mybank/getOrderList', {
      token: this.authService.getToken(),
      bankToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMjoxIiwiaXNzIjoicGx1c21pbnVzLmF6IiwiZXhwIjoxNTU5NTAyMTY1LCJpYXQiOjE1NTk0OTg1NjUsImp0aSI6IjMyIn0.MrnFoOkt8VyIHA991tKMjsQq2Ph11JlcDONkNPfK4ok',
      called: false
    })
    .pipe(map(res => {
      return res && res.data;
    }))
  }
}
