import { Component, OnInit, ViewChild } from '@angular/core';
import { LoansService } from '../loans.service';
import { LoanProduct } from '../models/loanProduct.model';
import {MatDialog}  from '@angular/material/dialog';
import { LoanRequestDialogComponent } from '../loan-request-dialog/loan-request-dialog.component';
import { MoockLoansData } from './mock-loans';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.scss']
})
export class LoansTableComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  loanProducts: LoanProduct[];
  expandedNode: string;
  constructor(private loansService: LoansService, private dialog: MatDialog ) { }

  ngOnInit() {
  this.getListLoanProducts();
  this.listenToFilterChanges();
  }
  listenToFilterChanges() {
   // this.form.valueChanges.subscribe(res => console.log(res))
  }
  getListLoanProducts() {
    this.loansService.getListLoanProducts()
    .subscribe(res => {
  // this.loanProducts = res || MoockLoansData;
   this.loanProducts = res;
  //    console.log(this.loanProducts[0])
    })
  }
  onExpandToggle(id: string) {
   if (this.expandedNode === id) {
      this.expandedNode = undefined;
   } else {
     this.expandedNode = id;
   }
  }
  onRequestLoansFromAllBanks() {
      const ref  = this.dialog.open(LoanRequestDialogComponent, {
        panelClass: 'loanRequestDialog',
    //    backdropClass: 'loanRequestDialogBackdrop'
      });

  }

}
