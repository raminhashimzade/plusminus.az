import { HomeService } from './../../../home.service';
import { Component, OnInit } from '@angular/core';
import {BankPartner} from './bank-partner.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'bank-partners',
  templateUrl: './bank-partners.component.html',
  styleUrls: ['./bank-partners.component.scss']
})
export class BankPartnersComponent implements OnInit {
  partners$: Observable<BankPartner[]>;
  mockPartner: BankPartner = {
    bankID: 1,
    bankWebSite: 'http://www.azerturkbank.az'
  }
  constructor(private homeService: HomeService) {
    this.partners$ = this.homeService.getBankList(true);
  }

  ngOnInit() {
  }


}
