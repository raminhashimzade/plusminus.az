import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BankPartner } from 'src/app/home/landing-page/our-partners/bank-partners/bank-partner.model';
import { DataResponse } from 'src/app/models/data-reponse';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { HomeService } from 'src/app/home/home.service';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';

@Injectable()
export class SharedAdminService {

  constructor(private http : HttpClient,
     private homeService: HomeService,
     private sharedService: SharedService
     ) {
  }

  getBankList(partner: boolean): Observable<SelectType[]> {
    return this.homeService.getBankList(partner)
    .pipe(
      map((res) =>  res && res.map(bank => {
        return {
            value: bank.bankID,
            label: bank.bankName
        }
      } ))
    );
  }
  getCurrCodeList(pageName: string): Observable<SelectType[]> {
    return this.sharedService.getCurrCodeList(pageName);
  }
}
