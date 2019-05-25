import { Component, OnInit, Input } from '@angular/core';
import { LoanProduct } from '../../../models/loanGroup.model';

@Component({
  selector: 'loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.scss']
})
export class LoanCardComponent implements OnInit {
  @Input() product: LoanProduct;
  constructor() { }

  ngOnInit() {
  }

}
