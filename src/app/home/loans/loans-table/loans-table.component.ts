import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoansService } from '../loans.service';
import { LoanProduct } from '../models/loanProduct.model';
import { MatDialog } from '@angular/material/dialog';
import { LoanRequestDialogComponent } from '../loan-request-dialog/loan-request-dialog.component';
import { MoockLoansData } from './mock-loans';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.scss']
})
export class LoansTableComponent implements OnInit, AfterViewInit {
  @ViewChild('f') form: NgForm;
  loanProducts: LoanProduct[];
  expandedNode: string;
  currentFormValues = {
    withEmpReference: true,
    withCollateral: false,
    withGracePeriod: false,
    comissionCash: false,
    comissionLoan: false,
  }
  constructor(private loansService: LoansService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getListLoanProducts(this.currentFormValues);
  }
  ngAfterViewInit() {
    setTimeout(() => this.setInitialCheckboxesToFalse(), 50)
    setTimeout(() => this.listenToTableFilterChanges(), 100)
  }
  setInitialCheckboxesToFalse() {
    Object.keys(this.form.controls).forEach(controlKey => {
      if (!this.form.controls[controlKey].value) {
        this.form.controls[controlKey].setValue(false);
      }
    });
  }
  listenToTableFilterChanges() {
    this.form.valueChanges.subscribe(res => {

     this.currentFormValues = {
       ...this.currentFormValues,
       ...this.form.value
     }
     this.getListLoanProducts(this.currentFormValues);
     console.log(this.currentFormValues)
    })
  }
  getListLoanProducts(data: Object) {
    this.loanProducts = null;
    this.loansService.getListLoanProducts(data)
      .subscribe(res => {
        // this.loanProducts = res || MoockLoansData;
        this.loanProducts = res;
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
    const ref = this.dialog.open(LoanRequestDialogComponent, {
      panelClass: 'loanRequestDialog',
      autoFocus: false,
      maxWidth: '90vw',
      disableClose: true
    });

  }
  onLoanBannerFormSubmit(form: NgForm) {
    const formValue = {
      ...this.currentFormValues,
      ...form.value
    }
    console.log(formValue);
    this.getListLoanProducts(formValue);
  }

}
