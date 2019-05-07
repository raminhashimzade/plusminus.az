import { AuthService } from './../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { DataResponse } from 'src/app/models/data-reponse';
import { Observable, of } from 'rxjs';
import { LoanProduct } from './models/loanProduct.model';

@Injectable({
    providedIn: 'root'
})
export class LoansService {
    constructor(private http: HttpClient, private authService: AuthService) {}
    getListLoanProducts(formValue: Object): Observable<LoanProduct[]> {
        return this.http.post<DataResponse>('mybank/listLoanProduct', {
            token: this.authService.getToken(),
            ...formValue
        })
        .pipe(
            map(res => res && res.data)
        )
    }
    sendOtp(formValue:Object):Observable<DataResponse> {
        return this.http.post<DataResponse>('mybank/sendOTP', {
            token: this.authService.getToken(),
            ...formValue
        })
        .pipe(
            catchError(er => of(null))
        );
    }
    checkOTP(formValue: Object) {
        return this.http.post<DataResponse>('mybank/checkOTP', {
            token: this.authService.getToken(),
            ...formValue
        }).pipe(
            catchError(er => of(null))
        );;
    }
    postLoanOrder(formValue: Object) {
        return this.http.post<DataResponse>('mybank/postLoanOrder', {
            token: this.authService.getToken(),
            ...formValue
        }).pipe(
            catchError(er => of(null))
        );
    }

    voteMe(vote: number) {
        return this.http.post<DataResponse>('mybank/voteMe', {
            token: this.authService.getToken(),
            companyId : "",
            companyType : "",
            vote : vote
        }).pipe(
            catchError(er => of(null))
        );
    }
    listLoanPeriods() {
        return this.http.post<DataResponse>('mybank/listLoanPeriod', {
            token: this.authService.getToken()
        }).pipe(
            map(res => res && res.data)
        );;
    }
}