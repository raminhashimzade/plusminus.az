import { MoockLoansData } from './mock-loans';
import { Component, OnInit } from '@angular/core';
import { LoansService } from '../loans.service';
import { LoanProduct } from '../models/loanProduct.model';

@Component({
  selector: 'loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.scss']
})
export class LoansTableComponent implements OnInit {
  loanProducts: LoanProduct[] = MoockLoansData;
  expandedNode: string;
  constructor(private loansService: LoansService) { }

  ngOnInit() {
  //  this.getListLoanProducts();
  }
  getListLoanProducts() {
    this.loansService.getListLoanProducts()
    .subscribe(res => {
   this.loanProducts = res;
      console.log(this.loanProducts[0])
    })
  }
  onExpandToggle(id: string) {
    console.log(id)
   if (this.expandedNode === id) {
      this.expandedNode = undefined;
   } else {
     console.log('expand')
     this.expandedNode = id;
   }
  }

}
