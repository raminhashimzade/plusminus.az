import { BreakpointObserver } from '@angular/cdk/layout';
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
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';
import { SortStates } from 'src/app/shared/directives/order-by-column/sort-states.enum';
import { TranslateService } from '@ngx-translate/core';

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
  filteredLoanProducts: LoanProduct[];
  expandedNode: string;
 // sortState: {sortKey: string, sortBy: string};
  currentFormValues = {
    withEmpReference: true,
    withCollateral: false,
    withGracePeriod: false,
    comissionCash: false,
    comissionLoan: false,
    loanAmount: 0,
    loanCurrency: 'AZN',
    loanPeriod: 0
  }
  bannerFormValues = {};
  _onDestroy$ = new Subject<void>();
  isMobile: boolean;
  loading: boolean;
  sortState: SortChangeModel;
  showFilters: boolean;
  @HostListener('window:resize', ['$event']) resize() {this.determineMobileSize(); }

  constructor(
    private loansService: LoansService,
     private dialog: MatDialog,
      private changeRef: ChangeDetectorRef,
       private route: ActivatedRoute,
       private breakpointObserver: BreakpointObserver,
       private translateService: TranslateService
       ) { }

  ngOnInit() {
    this.determineMobileSize();
    this.listenToRouterParams();
    this.getListLoanProducts(this.currentFormValues);
  }
  determineMobileSize() {
    this.isMobile = isMobileSize();
   this.showFilters =  !this.breakpointObserver.isMatched('(max-width: 992px)');
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
        this.loanProducts = res;
        this.filteredLoanProducts = res;
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
  onSortChange(sortChange: SortChangeModel) {
    this.sortState = {...sortChange};
    if (sortChange.orderBySort === SortStates.asc) {
      this.filteredLoanProducts = [...this.filteredLoanProducts].sort((a, b) => {
        if (a[sortChange.orderByColumn] > b[sortChange.orderByColumn]) {return 1;}
        if (a[sortChange.orderByColumn] < b[sortChange.orderByColumn]) {return -1;}
        return 0;
      });
    } else if(sortChange.orderBySort === SortStates.desc) {
      this.filteredLoanProducts = [...this.filteredLoanProducts].sort((a, b) => {
        if (a[sortChange.orderByColumn] > b[sortChange.orderByColumn]) {return -1;}
        if (a[sortChange.orderByColumn] < b[sortChange.orderByColumn]) {return 1;}
        return 0;
      });
    } else {
      this.filteredLoanProducts = [...this.loanProducts];
    }
    this.changeRef.detectChanges();
  }
  isActiveSort(sortKey, sortBy): boolean {
    if (!this.sortState) {return false;}
   // console.log(this.sortState)
   // console.log(JSON.stringify(this.sortState) === JSON.stringify({sortKey, sortBy}))
    return JSON.stringify(this.sortState) === JSON.stringify({sortKey, sortBy});
  }
  onFilterInput(keys: string[], event) {
    const lang = this.translateService.getDefaultLang();
    const inputValue = event.target.value;
    if (!inputValue) {
      this.filteredLoanProducts = [...this.loanProducts];
      return;
    }
    this.filteredLoanProducts = [...this.loanProducts].filter((loan) => {
      return keys.some( (key) => {
        if (!loan[key]) {return false;}
        if (loan[key] && loan[key][lang]) {
          return loan[key][lang].toLowerCase().includes(inputValue);
        } else {
          return loan[key].toLowerCase().includes(inputValue);
        }
      });
    })
  }

}
