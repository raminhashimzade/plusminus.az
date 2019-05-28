import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit,  OnDestroy, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LoansService } from '../loans.service';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil, finalize, map } from 'rxjs/operators';
import { switchToView, isMobileSize } from 'src/app/app.utils';
import { Router, ActivatedRoute } from '@angular/router';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';
import { SharedService } from 'src/app/shared/shared.service';
import { LoanGroup, LoanProduct } from '../models/loanGroup.model';
import { LoanFilterForm } from '../models/loan-filter-form';
import { MatDialog } from '@angular/material';
import { DocumentDialogComponent } from 'src/app/shared/components/document-dialog/document-dialog.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.scss'],
 changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansTableComponent implements OnInit, OnDestroy {
  loading: boolean;
  loanGroupProducts: LoanGroup[];
  filteredGroupProducts: LoanGroup[];
  sortState: SortChangeModel;
  _onDestroy$ = new Subject<void>();
  expandedGroupId: number;
  columns = ['bankName', 'loanName', 'minRate','minAmount', 'maxAmount', 'minMonthlyPayment', 'maxMonthlyPayment', 'currencyCode'];
  @HostListener('window:resize', ['$event']) resize() { this.updateForLayoutChange() }
  constructor(
    private route: ActivatedRoute,
    private loanService: LoansService,
    private changeRef: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) { }

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
        const formValue = {
          loanAmount: res['loanAmount'] || '',
          loanCurrency: res['loanCurrency'] ||  '',
          loanPeriod: res['loanPeriod'] || '',
          withEmpReference: res['withEmpReference'] || true,
          withCollateral: res['withCollateral'] || false,
          withGracePeriod: res['withGracePeriod'] || false,
          comissionCash: res['comissionCash'] || false,
          comissionLoan: res['comissionLoan'] || false,
        } as LoanFilterForm;
        console.log(formValue);
        this.getListloanGroupProducts(formValue);
      });
    this.changeRef.detectChanges();
  }
  getListloanGroupProducts(data: LoanFilterForm) {
    this.loanGroupProducts = undefined;
    this.loading = true;
    this.sortState = { orderByColumn: '', orderBySort: '' };
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
        switchToView('#loans-table-filter');
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
    const data = documentData[this.translateService.getDefaultLang()]
    this.dialog.open(DocumentDialogComponent, {
      data: data,
      width: '300px',
      maxHeight: '90vh'
    })
  }

}
