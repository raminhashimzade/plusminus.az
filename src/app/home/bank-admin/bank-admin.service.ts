import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/models/data-reponse';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { CustomerOrder } from './models/customer-order.model';
import { OrderShowInfo } from './models/order-show-info.model';
import { OrderStats } from './models/order-stats.model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BankAdminUser } from './models/bank-admin.user.model';
@Injectable({
  providedIn: 'root'
})
export class BankAdminService {
  token: string;
  bankId: string;
  user: BankAdminUser;
  jwtService = new JwtHelperService();
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
   }
  getToken(): string {
    return this.token;
  }
  getUser(): BankAdminUser {
    return {...this.user};
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
        this.user = this.jwtService.decodeToken(this.token);
        return this.token;
      }))
  }
  logout() {
    this.token = undefined;
    this.bankId = undefined;
    this.router.navigateByUrl('/home/bank-admin/login');
  }
  changePassword(formValue: any): Observable<DataResponse> {
    return this.http.post<DataResponse>('mybank/changeBankLoginPassword', {
      token: this.authService.getToken(),
      bankToken : this.token,
      oldPassword : formValue.oldPassword,
      newPassword : formValue.newPassword
    })
      .pipe(map(res => {
        return res;
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
