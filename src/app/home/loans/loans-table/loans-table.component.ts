import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, HostListener, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LoansService } from '../loans.service';
import { LoanProduct } from '../models/loanProduct.model';
import { MatDialog } from '@angular/material/dialog';
import { LoanRequestDialogComponent } from '../loan-request-dialog/loan-request-dialog.component';
import { NgForm } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil, finalize, map } from 'rxjs/operators';
import { switchToView, isMobileSize } from 'src/app/app.utils';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  @ViewChild('table') table: ElementRef;
  loanProducts: LoanProduct[];
  expandedNode: string;
  sortState: {sortKey: string, sortBy: string};
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
      private changeRef: ChangeDetectorRef,
       private route: ActivatedRoute) { }

  ngOnInit() {
    this.determineMobileSize();
    this.listenToRouterParams();
  }
  determineMobileSize() {
    this.isMobile = isMobileSize();
    this.changeRef.detectChanges();
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
    this.changeRef.detectChanges();
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
      finalize(() => {
         this.loading = false;
         this.changeRef.detectChanges();
      })
    )
      .subscribe(res => {
        // this.loanProducts = res || MoockLoansData;
        this.loanProducts = res.slice(0, 20);
        switchToView('#loans-table-filter');
      })
  }
  onExpandToggle(id: string) {
    if (this.expandedNode === id) {
      this.expandedNode = undefined;
    } else {
      this.expandedNode = id;
    }
    this.changeRef.detectChanges();
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
    this.changeRef.detectChanges();
  }
  canAddProductToCompare(loanID: number): Observable<boolean> {
    return this.loansService.getSavedCompareProductList()
      .pipe(map((loans: LoanProduct[]) => !!loans.find(l => l.lnID === loanID)));
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
    });
  }
  onSort(sortKey: string, sortBy: string) {
    if (sortBy === 'asc') {
      this.loanProducts = [...this.loanProducts].sort((a, b) => {
        if (a[sortKey] > b[sortKey]) {return 1;}
        if (a[sortKey] < b[sortKey]) {return -1;}
        return 0;
      });
    } else {
      this.loanProducts = [...this.loanProducts].sort((a, b) => {
        if (a[sortKey] > b[sortKey]) {return -1;}
        if (a[sortKey] < b[sortKey]) {return 1;}
        return 0;
      });
    }
    this.sortState = {sortKey, sortBy};
    this.changeRef.detectChanges();
  }
  isActiveSort(sortKey, sortBy): boolean {
    if (!this.sortState) {return false;}
   // console.log(this.sortState)
   // console.log(JSON.stringify(this.sortState) === JSON.stringify({sortKey, sortBy}))
    return JSON.stringify(this.sortState) === JSON.stringify({sortKey, sortBy});
  }

}
