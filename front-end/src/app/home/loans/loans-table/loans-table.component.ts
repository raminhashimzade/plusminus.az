import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit,  OnDestroy, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LoansService } from '../loans.service';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil, finalize, map } from 'rxjs/operators';
import { switchToView } from 'src/app/app.utils';
import {  ActivatedRoute } from '@angular/router';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';
import { SharedService } from 'src/app/shared/shared.service';
import { LoanGroup, LoanProduct } from '../models/loanGroup.model';
import { LoanFilterForm } from '../models/loan-filter-form';
import { MatDialog } from '@angular/material/dialog';
import { DocumentDialogComponent } from 'src/app/shared/components/document-dialog/document-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.scss'],
// changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansTableComponent implements OnInit, OnDestroy {
  loading: boolean;
  loanGroupProducts: LoanGroup[];
  filteredGroupProducts: LoanGroup[];
  sortState: SortChangeModel;
  _onDestroy$ = new Subject<void>();
  expandedGroupId: number;z
  columns = ['bankName',  'minRate','minAmount', 'maxAmount', 'minMonthlyPayment', 'currencyCode'];
  @HostListener('window:resize') resize() { this.updateForLayoutChange() }
  constructor(
    private route: ActivatedRoute,
    private loanService: LoansService,
    private changeRef: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private titleService: Title
  ) {
    this.titleService.setTitle(translateService.instant('~loans'));
  }

  ngOnInit() {
    this.listenToRouterParams();
    this.changeRef.detectChanges();
  }

  get isLGSize() {
    return  this.breakpointObserver.isMatched('(min-width: 768px)');
  }
  get showDocuments() {
    return  this.breakpointObserver.isMatched('(min-width: 992px)');
  }

  onExpandGroup(groupId: number) {
    if (this.expandedGroupId === groupId) {
      this.expandedGroupId = undefined;
      return;
    }
    this.expandedGroupId = groupId;
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  updateForLayoutChange() {
    this.changeRef.detectChanges();
  }
  listenToRouterParams() {
    this.route.params
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(res => {
        console.log('route change in table');
      //  if (!res['loanCurrency']) {return;}
      const defaultFilter  = new LoanFilterForm();
        const formValue = {
          loanAmount: res['loanAmount'] || defaultFilter.loanAmount,
          loanCurrency: res['loanCurrency'] || defaultFilter.loanCurrency,
          loanPeriod: res['loanPeriod'] || defaultFilter.loanPeriod,
          withEmpReference: res['withEmpReference'] || defaultFilter.withEmpReference,
          withCollateral: res['withCollateral'] || defaultFilter.withCollateral,
          withGracePeriod: res['withGracePeriod'] || defaultFilter.withGracePeriod,
          comissionCash: res['comissionCash'] || defaultFilter.comissionCash,
          comissionLoan: res['comissionLoan'] || defaultFilter.comissionLoan
        } as LoanFilterForm;
        this.getListloanGroupProducts(formValue);
      });
    this.changeRef.detectChanges();
  }
  getListloanGroupProducts(data: LoanFilterForm, scrollIntoView =false) {
    this.loanGroupProducts = undefined;
    this.loading = true;
    this.sortState = { orderByColumn: '', orderBySort: '' };
    this.changeRef.detectChanges();
    this.loanService.getListLoanGroupProducts(data)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.changeRef.detectChanges();
        })
      )
      .subscribe(res => {
        this.loanGroupProducts = res;
        this.filteredGroupProducts = [...this.loanGroupProducts];
      if (scrollIntoView) {switchToView('#products-table-filter') }
      });
  }
  onAddProductToCompare(loan: LoanProduct) {
    this.loanService.addProductToCompare(loan);
    this.changeRef.detectChanges();
  }
  canAddProductToCompare(loanID: number): Observable<boolean> {
    return this.loanService.getSavedCompareProductList()
      .pipe(map((loans: LoanProduct[]) => !!loans.find(l => l.lnID === loanID)));
  }
  onSortChange(sortChange: SortChangeModel) {
    this.sortState = { ...sortChange };
    this.filteredGroupProducts = this.sharedService.sortTableWithRowGroups(this.sortState, [...this.loanGroupProducts])
    this.changeRef.detectChanges();
  }
  applyFilter(filterValue: string) {
    this.filteredGroupProducts = this.sharedService.
    filterTableWithRowGroups(filterValue, [...this.loanGroupProducts], ['bankName']);
    this.changeRef.detectChanges();
  }
  openDocumentDialog(documentData) {
    const text= documentData[this.translateService.getDefaultLang()]
    this.dialog.open(DocumentDialogComponent, {
      data: {
        title: this.translateService.instant('~documentDoc'),
        text: text
      },
      width: '300px',
      maxHeight: '90vh'
    })
  }

}
