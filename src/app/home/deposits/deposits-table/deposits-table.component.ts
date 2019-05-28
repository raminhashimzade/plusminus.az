import { Component, OnInit, ChangeDetectorRef, HostListener, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepositCalcForm } from '../models/deposit-calc-form.model';
import { DepositService } from '../deposit.service';
import { finalize, takeUntil, map } from 'rxjs/operators';
import { switchToView} from 'src/app/app.utils';
import { Observable, Subject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';
import { DepositProduct, DepositGroup } from '../models/deposit-group.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'deposits-table',
  templateUrl: './deposits-table.component.html',
  styleUrls: ['./deposits-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepositsTableComponent implements OnInit, OnDestroy {
  loading: boolean;
  depositGroupProducts: DepositGroup[];
  filteredGroupProducts: DepositGroup[];
  sortState: SortChangeModel;
  _onDestroy$ = new Subject<void>();
  expandedGroupId: number;
  columns = ['bankName', 'depositName', 'minRate', 'liqType', 'income', 'currencyCode', 'income'];
  @HostListener('window:resize', ['$event']) resize() { this.updateForLayoutChange() }
  constructor(
    private route: ActivatedRoute,
    private depositService: DepositService,
    private changeRef: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private sharedService: SharedService
  ) {
   }

  ngOnInit() {
    this.listenToRouterParams();
    this.changeRef.detectChanges();
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
  }
  listenToRouterParams() {
    this.route.params
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(res => {
        const formValue = {
          depositAmount: res['depositAmount'] || '',
          depositCurrency: res['depositCurrency'] || 'AZN',
          depositPeriod: res['depositPeriod'] || 0,
          withCapitalisation: res['withCapitalisation'] || false,
          withWithdraw: res['withWithdraw'] || false,
          withRefill: res['withRefill'] || false,
          withAutoProloing: res['withAutoProloing'] || false,
        } as DepositCalcForm;
        console.log(formValue);
        this.getListDepositGroupProducts(formValue);
      });
    this.changeRef.detectChanges();
  }
  getListDepositGroupProducts(data: DepositCalcForm) {
    this.depositGroupProducts = undefined;
    this.loading = true;
    this.sortState = { orderByColumn: '', orderBySort: '' };
    this.depositService.getListDepositGroupProducts(data)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.changeRef.detectChanges();
        })
      )
      .subscribe(res => {
        this.depositGroupProducts = res;
        // this.depositProducts = flatten(res.map((group) => group.list));
        this.filteredGroupProducts = [...this.depositGroupProducts];
        switchToView('#deposits-table-filter');
      });
  }
  onAddProductToCompare(product: DepositProduct) {
    this.depositService.addProductToCompare(product);
 //   this.changeRef.detectChanges();
  }
  canAddProductToCompare(loanID: number): Observable<boolean> {
    return this.depositService.getSavedCompareProductList()
      .pipe(map((loans: DepositProduct[]) => !!loans.find(l => l.dpID === loanID)));
  }
  onSortChange(sortChange: SortChangeModel) {
    this.sortState = { ...sortChange };
   this.filteredGroupProducts = this.sharedService.sortTableWithRowGroups(this.sortState, [...this.depositGroupProducts])
    this.changeRef.detectChanges();
  }
  applyFilter(filterValue: string) {
    this.filteredGroupProducts = this.sharedService
    .filterTableWithRowGroups(filterValue, [...this.depositGroupProducts], ['bankName']);
    this.changeRef.detectChanges();
  }
  get isLGSize() {
    return  this.breakpointObserver.isMatched('(min-width: 768px)');
  }
}
