import { Component, OnInit } from '@angular/core';
import { LoansService } from '../loans.service';
import { LoanProduct } from '../models/loanProduct.model';
import {MatDialog}  from '@angular/material/dialog';
import { LoanRequestDialogComponent } from '../loan-request-dialog/loan-request-dialog.component';
@Component({
  selector: 'loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.scss']
})
export class LoansTableComponent implements OnInit {
  loanProducts: LoanProduct[];
  expandedNode: string;
  constructor(private loansService: LoansService, private dialog: MatDialog ) { }

  ngOnInit() {
  this.getListLoanProducts();
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
  onRequestLoansFromAllBanks() {
      const ref  = this.dialog.open(LoanRequestDialogComponent, {
        panelClass: 'loanRequestDialog',
        backdropClass: 'loanRequestDialogBackdrop'
      });

  }

}
