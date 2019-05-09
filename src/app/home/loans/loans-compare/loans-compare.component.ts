import { Component, OnInit } from '@angular/core';
import { LoansService } from '../loans.service';
import { LoanProduct } from '../models/loanProduct.model';

@Component({
  selector: 'loans-compare',
  templateUrl: './loans-compare.component.html',
  styleUrls: ['./loans-compare.component.scss']
})
export class LoansCompareComponent implements OnInit {
  loanProducts: LoanProduct[];
  viibleProducts: LoanProduct[];
  constructor(private loansServive: LoansService) { }

  ngOnInit() {
    this.getCompareLoanProductList();
  }
  getCompareLoanProductList() {
    this.loansServive.getCompareLoanProductList([1, 5, 7])
    .subscribe(res => {
      console.log(res);
      this.loanProducts = res.concat(res).concat(res);
      this.viibleProducts = this.loanProducts.slice(0, 3);
    })
  }

}
