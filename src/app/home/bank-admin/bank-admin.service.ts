import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/models/data-reponse';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { CustomerOrder } from './models/customer-order.model';
import { OrderShowInfo } from './models/order-show-info.model';
import { OrderStats } from './models/order-stats.model';

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
  getOrderList(cancelled: boolean, called: boolean): Observable<CustomerOrder[]> {
    return this.http.post<DataResponse>('mybank/getOrderList', {
      token: this.authService.getToken(),
      bankToken: this.token,
      called: called,
      cancelled: cancelled
    })
      .pipe(map(res => {
        return res && res.data;
      }))
  }
  postLoanOrderShowInfo(order: CustomerOrder): Observable<OrderShowInfo> {
    return this.http.post<DataResponse>('mybank/postLoanOrderShowInfo', {
      token: this.authService.getToken(),
      bankToken: this.token,
      orderId: order.rqId,
      bankID: this.bankId,
    })
      .pipe(map(res => {
        return res && res.data;
      }))
  }
  postLoanOrderCalled(order: CustomerOrder, note: string): Observable<DataResponse> {
    return this.http.post<DataResponse>('mybank/postLoanOrderCalled', {
      token: this.authService.getToken(),
      bankToken: this.token,
      orderId: order.rqId,
      bankID: this.bankId,
      bankNote: note
    })
      .pipe(map(res => {
        return res
      }))
  }
  postLoanOrderCancel(order: CustomerOrder): Observable<DataResponse> {
    return this.http.post<DataResponse>('mybank/postLoanOrderCancel', {
      token: this.authService.getToken(),
      bankToken: this.token,
      orderId: order.rqId,
      bankID: this.bankId,
      bankNote: null
    })
      .pipe(map(res => {
        return res
      }))
  }
  getOrderStats(): Observable<OrderStats> {
    return this.http.post<DataResponse>('mybank/getOrderStats', {
      token: this.authService.getToken(),
      bankToken: this.token,
    })
      .pipe(map(res => {
        return res && res.data && res.data[0]
      }))
  }
}
