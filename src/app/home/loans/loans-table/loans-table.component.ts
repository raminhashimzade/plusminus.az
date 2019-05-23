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
  bannerFormValues = {};
  _onDestroy$ = new Subject<void>();
  isMobile: boolean;
  loading: boolean;
  sortState: SortChangeModel;
  showFilters: boolean;
  columns = ['bankName', 'loanName', 'minRate', 'minAmount', 'maxAmount',
   'minMonthlyPayment', 'maxMonthlyPayment', 'currencyCode'];
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
 //   this.getListLoanProducts(this.currentFormValues);
  }
  determineMobileSize() {
    this.isMobile = isMobileSize();
    this.showFilters =  !this.breakpointObserver.isMatched('(max-width: 992px)');
    this.changeRef.detectChanges();
  }

  ngAfterViewInit() {
  //  setTimeout(() => this.listenToTableFilterChanges(), 100)
  }
  ngOnDestroy() {
    this._onDestroy$.next();
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

  onAddProductToCompare(loan: LoanProduct) {
    this.loansService.addProductToCompare(loan);
    this.changeRef.detectChanges();
  }
  canAddProductToCompare(loanID: number): Observable<boolean> {
    return this.loansService.getSavedCompareProductList()
      .pipe(map((loans: LoanProduct[]) => !!loans.find(l => l.lnID === loanID)));
  }
  listenToRouterParams() {
    this.route.params
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(res => {
        const formValue = {
           loanAmount: res['loanAmount'] || '',
          loanCurrency: res['loanCurrency'] ||  '',
          loanPeriod: res['loanPeriod'] || '',
          withEmpReference: res['withEmpReference'] || true,
          withCollateral: res['withCollateral'] || false,
          withGracePeriod: res['withGracePeriod'] || false,
          comissionCash: res['comissionCash'] || false,
          comissionLoan: res['comissionLoan'] || false,
        }
        console.log(formValue);
        this.getListLoanProducts(formValue);
    });
    this.changeRef.detectChanges();
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
  applyFilter(filterValue: string) {
    const lang = this.translateService.getDefaultLang();
    if (!filterValue) {
      this.filteredLoanProducts = [...this.loanProducts];
      return;
    }
    this.filteredLoanProducts = [...this.loanProducts].filter((loan) => {
      return  Object.keys(loan).some( (key) => {
        if (!this.columns.find(col => col === key)) {return false;}
        if (!loan[key]) {return false;}
        if (loan[key] && loan[key][lang]) {
          return loan[key][lang].toLowerCase().includes(filterValue);
        } else {
          return loan[key].toString().toLowerCase().includes(filterValue);
        }
      });
    })
  }

}
