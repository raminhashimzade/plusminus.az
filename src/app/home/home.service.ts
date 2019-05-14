import { BankPartner } from './landing-page/our-partners/bank-partners/bank-partner.model';
import { AuthService } from './../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse } from '../models/data-reponse';
import { catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { FavorableRatePreview } from './landing-page/favorable-rates-preview/favorable-rate-preview.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  getcurrBestRateList(): Observable<FavorableRatePreview[]> {
    return this.http.post<DataResponse>('mybank/currBestRateList', {
        token: this.authService.getToken(),
    }).pipe(
        map(res => res && res.data),
        catchError(er => of(null))
    );
  }
  getBankList(): Observable<BankPartner[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<DataResponse>('mybank/bankList', {
      token: this.authService.getToken(),
  }, httpOptions).pipe(
      map(res => res && res.data),
      catchError(er => of(null))
  );
  }
}
