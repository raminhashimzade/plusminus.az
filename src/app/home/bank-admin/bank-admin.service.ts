import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/models/data-reponse';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BankAdminService {
  token: string;
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
      this.token = res && res.data;
      console.log(this.token)
      return this.token;
    }))
  }
}
