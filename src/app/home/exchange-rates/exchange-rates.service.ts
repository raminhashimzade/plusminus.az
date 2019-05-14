import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable, of } from 'rxjs';
import { FavorableRatePreview } from '../landing-page/favorable-rates-preview/favorable-rate-preview.model';
import { DataResponse } from 'src/app/models/data-reponse';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ExchangeRate } from './models/exchange-rate.model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private http: HttpClient, private authService: AuthService) { }
    getcurrBestRateList(): Observable<FavorableRatePreview[]> {
      return this.http.post<DataResponse>('mybank/currBestRateList', {
          token: this.authService.getToken(),
      }).pipe(
          map(res => res && res.data),
          catchError(er => of(null))
      );
    }

    getCurrRateList(): Observable<ExchangeRate[]> {
      return this.http.post<DataResponse>('mybank/currRateList', {
          token: this.authService.getToken(),
      }).pipe(
          map(res => res && res.data),
          catchError(er => of(null))
      );
    }
}
