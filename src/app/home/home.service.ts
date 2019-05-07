import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
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
}
