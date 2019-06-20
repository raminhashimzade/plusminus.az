import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { DebitCardGroup, DebitCard } from '../models/debit-card.model';
import { DebitCardService } from '../debit-card.service';
import { DebitCardFilterForm } from '../models/debit-card-filter-form.model';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SharedService } from 'src/app/shared/shared.service';
import { MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { takeUntil, finalize } from 'rxjs/operators';

@Component({
  selector: 'debit-cards-table',
  templateUrl: './debit-cards-table.component.html',
  styleUrls: ['./debit-cards-table.component.scss']
})
export class DebitCardsTableComponent implements OnInit {

  loading: boolean;
  produtctGroups: DebitCardGroup[];
  filteredGroupProducts: DebitCardGroup[];
  sortState: SortChangeModel;
  _onDestroy$ = new Subject<void>();
  expandedGroupId: number;z
  @HostListener('window:resize', ['$event']) resize() { this.updateForLayoutChange() }
  constructor(
    private route: ActivatedRoute,
    private productService: DebitCardService,
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
        const formValue = {
          currencyCode: res['currencyCode'] ||  'AZN',
          withCashBack: res['withCashBack'] ||false,
          withMiles: res['withMiles'] || false,
          withDepositRate: res['withDepositRate'] || false,
          comissionCash: res['comissionCash'] || true,
        } as DebitCardFilterForm;
        const scrollIntoView =  res['scrollIntoView'] === 'true'
        this.getListprodutctGroups(formValue, scrollIntoView);
      });
    this.changeRef.detectChanges();
  }
  getListprodutctGroups(data: DebitCardFilterForm, scrollIntoView: boolean) {
    this.produtctGroups = undefined;
    this.loading = true;
    this.sortState = { orderByColumn: '', orderBySort: '' };
    this.changeRef.detectChanges();
    this.productService.getListGCardDebetProduct(data)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.changeRef.detectChanges();
        })
      )
      .subscribe(res => {
        console.log(res);
        this.produtctGroups = res;
        this.filteredGroupProducts = [...this.produtctGroups];
     //   if (scrollIntoView) {switchToView('#products-table-filter') }
      });
  }
  onAddProductToCompare(loan: DebitCard) {
  //  this.productService.addProductToCompare(loan);
    this.changeRef.detectChanges();
  }
  // canAddProductToCompare(loanID: number): Observable<boolean> {
  //   return this.productService.getSavedCompareProductList()
  //     .pipe(map((loans: DebitCard[]) => !!loans.find(l => l.lnID === loanID)));
  // }
  onSortChange(sortChange: SortChangeModel) {
    this.sortState = { ...sortChange };
    this.filteredGroupProducts = this.sharedService.sortTableWithRowGroups(this.sortState, [...this.produtctGroups])
    this.changeRef.detectChanges();
  }
  applyFilter(filterValue: string) {
    this.filteredGroupProducts = this.sharedService.
    filterTableWithRowGroups(filterValue, [...this.produtctGroups], ['bankName']);
    this.changeRef.detectChanges();
  }

}
