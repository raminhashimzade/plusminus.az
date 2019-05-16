import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { LoansService } from '../loans.service';
import { LoanProduct } from '../models/loanProduct.model';
import { MatDialog } from '@angular/material/dialog';
import { LoanRequestDialogComponent } from '../loan-request-dialog/loan-request-dialog.component';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { switchToView, isMobileSize } from 'src/app/app.utils';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.scss']
})
export class LoansTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  @ViewChild('table') table: ElementRef;
  loanProducts: LoanProduct[];
  expandedNode: string;
  currentFormValues = {
    withEmpReference: true,
    withCollateral: false,
    withGracePeriod: false,
    comissionCash: false,
    comissionLoan: false,
  }
  bannerFormValues = {};
  _onDestroy$ = new Subject<void>();
  isMobile: boolean;
  loading: boolean;
  @HostListener('window:resize', ['$event']) resize() {this.determineMobileSize(); }

  constructor(
    private loansService: LoansService,
     private dialog: MatDialog,
      private router: Router,
       private route: ActivatedRoute) { }

  ngOnInit() {
  //  this.getListLoanProducts(this.currentFormValues);
    this.determineMobileSize();
    this.listenToRouterParams();
  }
  determineMobileSize() {
    this.isMobile = isMobileSize();
  }

  ngAfterViewInit() {
    setTimeout(() => this.setInitialCheckboxesToFalse(), 50)
    setTimeout(() => this.listenToTableFilterChanges(), 100)
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  setInitialCheckboxesToFalse() {
    Object.keys(this.form.controls).forEach(controlKey => {
      if (!this.form.controls[controlKey].value) {
        this.form.controls[controlKey].setValue(false);
      }
    });
  }
  listenToTableFilterChanges() {
    this.form.valueChanges
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(res => {

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
    this.loading = true;
    this.loansService.getListLoanProducts(data)
    .pipe(
      finalize(() => this.loading = false)
    )
      .subscribe(res => {
        // this.loanProducts = res || MoockLoansData;
        this.loanProducts = res;
        switchToView('#loans-table-filter');
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
      disableClose: true,
      position: isMobileSize() && {top: '0'}
    });

  }
  onLoanBannerFormSubmit(form: NgForm) {
    const formValue = {
      ...this.currentFormValues,
      ...form.value
    }
    console.log(formValue);
    this.currentFormValues = formValue;
    this.getListLoanProducts(formValue);
  }
  onAddProductToCompare(loan: LoanProduct) {
    this.loansService.addProductToCompare(loan);
  }
  canAddProductToCompare(loanID: number) {
    return this.loansService.compareProductList.find(p => p.lnID === loanID);
  }
  listenToRouterParams() {
    this.route.params.subscribe(res => {
      const loanAmount = res['loanAmount'];
      const loanCurrency = res['loanCurrency'];
      const loanPeriod = res['loanPeriod'];
      if (loanAmount && loanCurrency) {
        const formValue = {
          ...this.currentFormValues,
          loanAmount,
          loanCurrency,
          loanPeriod
        }
        console.log(formValue);
        this.currentFormValues = formValue;
        this.getListLoanProducts(formValue);
      }
    })
  }

}
