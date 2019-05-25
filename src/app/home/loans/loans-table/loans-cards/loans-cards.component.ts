import { Component, OnInit, Input } from '@angular/core';
import { LoanProduct, LoanGroup } from '../../models/loanGroup.model';

@Component({
  selector: 'loans-cards',
  templateUrl: './loans-cards.component.html',
  styleUrls: ['./loans-cards.component.scss']
})
export class LoansCardsComponent implements OnInit {
  @Input() loanGroupProducts: LoanGroup[];
  constructor() { }

  ngOnInit() {
  }

}
