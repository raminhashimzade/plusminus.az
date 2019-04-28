import { Component, OnInit } from '@angular/core';
import {BankPartner} from './bank-partner.model';
import {MockBankPartners} from './mock-bank-partners';
@Component({
  selector: 'bank-partners',
  templateUrl: './bank-partners.component.html',
  styleUrls: ['./bank-partners.component.scss']
})
export class BankPartnersComponent implements OnInit {
  partners: BankPartner[] = MockBankPartners;
  constructor() { }

  ngOnInit() {
  }

}
