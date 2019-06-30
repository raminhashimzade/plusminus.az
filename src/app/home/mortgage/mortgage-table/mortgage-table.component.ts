import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { LoanGroup, LoanProduct } from '../../loans/models/loanGroup.model';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';
import { Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoansService } from '../../loans/loans.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SharedService } from 'src/app/shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil, finalize, map } from 'rxjs/operators';
import { LoanFilterForm } from '../../loans/models/loan-filter-form';
import { switchToView } from 'src/app/app.utils';
import { DocumentDialogComponent } from 'src/app/shared/components/document-dialog/document-dialog.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mortgage-table',
  templateUrl: './mortgage-table.component.html',
  styleUrls: ['./mortgage-table.component.scss']
})
export class MortgageTableComponent implements OnInit {
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
    private translateService: TranslateService,
    private titleService: Title
  ) {
    this.titleService.setTitle(this.translateService.instant('~mortgage'));
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
        const formValue = {
          loanAmount: res['loanAmount'] || '',
          loanCurrency: res['loanCurrency'] ||  '',
          loanPeriod: res['loanPeriod'] || '',
          withEmpReference: res['withEmpReference'] || true,
          withCollateral: res['withCollateral'] || true,
          withGracePeriod: res['withGracePeriod'] || false,
          comissionCash: res['comissionCash'] || true,
          comissionLoan: res['comissionLoan'] || true,
          mortgage: true
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
