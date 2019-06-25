import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';
import { Subject, Observable } from 'rxjs';
import { takeUntil, finalize, map } from 'rxjs/operators';
import { CreditCardFilterForm } from '../models/credit-card-filter-form.model';
import { switchToView } from 'src/app/app.utils';
import { CreditCard, CreditCardGroup } from '../models/credit-card.model';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SharedService } from 'src/app/shared/shared.service';
import { MatDialog } from '@angular/material';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'credit-cards-table',
  templateUrl: './credit-cards-table.component.html',
  styleUrls: ['./credit-cards-table.component.scss']
})
export class CreditCardsTableComponent implements OnInit {
  loading: boolean;
  creditCardGroups: CreditCardGroup[];
  filteredGroupProducts: CreditCardGroup[];
  sortState: SortChangeModel;
  _onDestroy$ = new Subject<void>();
  expandedGroupId: number;z
  @HostListener('window:resize', ['$event']) resize() { this.updateForLayoutChange() }
  constructor(
    private route: ActivatedRoute,
    private productService: CreditCardService,
    private changeRef: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private titleService: Title
  ) {
    this.titleService.setTitle(translateService.instant('~credit-cards'));
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
    this.changeRef.detectChanges();
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
          currencyCode: res['currencyCode'] ||  'AZN',
          loanPeriod: res['loanPeriod'] || '',
          withEmpReference: res['withEmpReference'] || true,
          withCashBack: res['withCashBack'] ||false,
          withMiles: res['withMiles'] || false,
          withDepositRate: res['withDepositRate'] || false,
          withGracePeriod: res['withGracePeriod'] || false,
          comissionCash: res['comissionCash'] || true,
        } as CreditCardFilterForm;
        const scrollIntoView =  res['scrollIntoView'] === 'true'
        this.getListcreditCardGroups(formValue, scrollIntoView);
      });
    this.changeRef.detectChanges();
  }
  getListcreditCardGroups(data: CreditCardFilterForm, scrollIntoView: boolean) {
    this.creditCardGroups = undefined;
    this.loading = true;
    this.sortState = { orderByColumn: '', orderBySort: '' };
    this.changeRef.detectChanges();
    this.productService.getListGCardCreditProduct(data)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.changeRef.detectChanges();
        })
      )
      .subscribe(res => {
        this.creditCardGroups = res;
        this.filteredGroupProducts = [...this.creditCardGroups];
     //   if (scrollIntoView) {switchToView('#products-table-filter') }
      });
  }
  onAddProductToCompare(product: CreditCard) {
  this.productService.addProductToCompare(product);
    this.changeRef.detectChanges();
  }
  canAddProductToCompare(loanID: number): Observable<boolean> {
    return this.productService.getSavedCompareProductList()
      .pipe(map((products: CreditCard[]) => !!products.find(l => l.cdId === loanID)));
  }
  onSortChange(sortChange: SortChangeModel) {
    this.sortState = { ...sortChange };
    this.filteredGroupProducts = this.sharedService.sortTableWithRowGroups(this.sortState, [...this.creditCardGroups])
    this.changeRef.detectChanges();
  }
  applyFilter(filterValue: string) {
    this.filteredGroupProducts = this.sharedService.
    filterTableWithRowGroups(filterValue, [...this.creditCardGroups], ['bankName']);
    this.changeRef.detectChanges();
  }


}
