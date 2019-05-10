import { AuthService } from './../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { DataResponse } from 'src/app/models/data-reponse';
import { Observable, of, Subject, ReplaySubject } from 'rxjs';
import { LoanProduct } from './models/loanProduct.model';

@Injectable({
    providedIn: 'root'
})
export class LoansService {
    compareProductIds$ = new ReplaySubject<number[]>();
    compareProductIds = [1,5,7];
    constructor(private http: HttpClient, private authService: AuthService) {
        this.compareProductIds$.next([1, 5 , 7]);
    }
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

    voteMe(vote:{gsm: string, vote: number}) {
        return this.http.post<DataResponse>('mybank/voteMe', {
            token: this.authService.getToken(),
            companyId : "",
            companyType : "",
            vote : vote.vote,
            gsm: vote.gsm
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
    getCompareLoanProductList(productIds: number[]) {
        return this.http.post<DataResponse>('mybank/compareProducts', {
            token: this.authService.getToken(),
            prodId : productIds,
	        prodType : "loan"
        }).pipe(
            map(res => res && res.data)
        );
    }
    addProductToCompare(productId: number):void {
        if(!(productId && this.compareProductIds)) {return;}
        if (this.compareProductIds.includes(productId)) {return;}
        this.compareProductIds = [
            ...this.compareProductIds,
            productId
        ];
        this.compareProductIds$.next(this.compareProductIds);
    }
    getCompareProductIds(): Observable<number[]> {
        return this.compareProductIds$.asObservable();
    }
}