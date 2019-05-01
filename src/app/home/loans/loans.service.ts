import { AuthService } from './../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { DataResponse } from 'src/app/models/data-reponse';
import { Observable } from 'rxjs';
import { LoanProduct } from './models/loanProduct.model';

@Injectable({
    providedIn: 'root'
})
export class LoansService {
    constructor(private http: HttpClient, private authService: AuthService) {}
    getListLoanProducts(): Observable<LoanProduct[]> {
        return this.http.post<DataResponse>('mybank/listLoanProduct', {
            token: this.authService.getToken()
        })
        .pipe(
            map(res => res && res.data)
        )
    }
}