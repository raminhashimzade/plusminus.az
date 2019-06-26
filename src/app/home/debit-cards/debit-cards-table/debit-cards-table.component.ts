import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { DebitCardGroup, DebitCard } from '../models/debit-card.model';
import { DebitCardService } from '../debit-card.service';
import { DebitCardFilterForm } from '../models/debit-card-filter-form.model';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';
import { Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SharedService } from 'src/app/shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { takeUntil, finalize, map } from 'rxjs/operators';

@Component({
  selector: 'debit-cards-table',
  templateUrl: './debit-cards-table.component.html',
  styleUrls: ['./debit-cards-table.component.scss']
})
export class DebitCardsTableComponent implements OnInit {
  loading: boolean;
  DebitCardGroups: DebitCardGroup[];
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
    this.titleService.setTitle(translateService.instant('~debit-cards'));
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
        this.getListDebitCardGroups(formValue, scrollIntoView);
      });
    this.changeRef.detectChanges();
  }
  getListDebitCardGroups(data: DebitCardFilterForm, scrollIntoView: boolean) {
    this.DebitCardGroups = undefined;
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
        this.DebitCardGroups = res;
        this.filteredGroupProducts = [...this.DebitCardGroups];
     //   if (scrollIntoView) {switchToView('#products-table-filter') }
      });
  }
  onAddProductToCompare(product: DebitCard) {
  this.productService.addProductToCompare(product);
    this.changeRef.detectChanges();
  }
  canAddProductToCompare(id: number): Observable<boolean> {
    return this.productService.getSavedCompareProductList()
      .pipe(map((products: DebitCard[]) => !!products.find(l => l.cdID === id)));
  }
  onSortChange(sortChange: SortChangeModel) {
    this.sortState = { ...sortChange };
    this.filteredGroupProducts = this.sharedService.sortTableWithRowGroups(this.sortState, [...this.DebitCardGroups])
    this.changeRef.detectChanges();
  }
  applyFilter(filterValue: string) {
    this.filteredGroupProducts = this.sharedService.
    filterTableWithRowGroups(filterValue, [...this.DebitCardGroups], ['bankName']);
    this.changeRef.detectChanges();
  }

}
