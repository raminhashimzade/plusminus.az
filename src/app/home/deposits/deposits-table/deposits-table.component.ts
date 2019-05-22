import { Component, OnInit, ChangeDetectorRef, HostListener, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepositCalcForm } from '../models/deposit-calc-form.model';
import { DepositService } from '../deposit.service';
import { finalize, takeUntil } from 'rxjs/operators';
import { switchToView, isMobileSize } from 'src/app/app.utils';
import { Observable, of, Subject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';
import { SortStates } from 'src/app/shared/directives/order-by-column/sort-states.enum';
import { TranslateService } from '@ngx-translate/core';
import { DepositProduct, DepositGroup } from '../models/deposit-group.model';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'deposits-table',
  templateUrl: './deposits-table.component.html',
  styleUrls: ['./deposits-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepositsTableComponent implements OnInit, OnDestroy {
  currentFormValues: DepositCalcForm;
  loading: boolean;
  depositGroupProducts: DepositGroup[];
  filteredGroupProducts: DepositGroup[];
  sortState: SortChangeModel;
  showFilters: boolean;
  _onDestroy$ = new Subject<void>();
  expandedGroupId: number;
  columns = ['bankName', 'depositName', 'minRate', 'liqType', 'income', 'currencyCode', 'income'];
  @HostListener('window:resize', ['$event']) resize() { this.updateForLayoutChange()}
  constructor(
    private route: ActivatedRoute,
    private depositService: DepositService,
    private changeRef: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private translateService: TranslateService
    ) { }

  ngOnInit() {
    this.showFilters =  !this.breakpointObserver.isMatched('(max-width: 992px)');
    this.listenToRouterParams();
    const data = {
      withCapitalisation: false,
      withWithdraw: false,
      withRefill: false,
      withAutoProloing: false,
      depositAmount: 0,
      depositPeriod: 0,
      depositCurrency: 'AZN'
    } as DepositCalcForm;
    this.getListDepositGroupProducts(data);
    this.changeRef.detectChanges();
  }
  onExpandGroup(groupId: number) {
    if (this.expandedGroupId === groupId) {
      console.log('indef')
      this.expandedGroupId = undefined;
      return;
    }
    this.expandedGroupId = groupId;
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  updateForLayoutChange() {
    this.showFilters =  !this.breakpointObserver.isMatched('(max-width: 992px)');
  }
  listenToRouterParams() {
    this.route.params
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(res => {
      const depositAmount = res['depositAmount'];
      const depositCurrency = res['depositCurrency'];
      const depositPeriod = res['depositPeriod'];
      if (depositAmount && depositCurrency) {
        const formValue = {
          ...this.currentFormValues,
          depositAmount,
          depositCurrency,
          depositPeriod
        }
        console.log(formValue);
        this.currentFormValues = formValue;
        this.getListDepositGroupProducts(formValue);
      }
    });
    this.changeRef.detectChanges();
  }
  getListDepositGroupProducts(data: DepositCalcForm) {
    this.depositGroupProducts = undefined;
    this.loading = true;
    this.sortState = {orderByColumn: '', orderBySort: ''};
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
  canAddProductToCompare(loanID: number): Observable<boolean> {
    return of(true);
    // return this.loansService.getSavedCompareProductList()
    //   .pipe(map((loans: LoanProduct[]) => !!loans.find(l => l.lnID === loanID)));
  }
  onAddProductToCompare(product) {
    return ;
  }
  onSortChange(sortChange: SortChangeModel) {
    this.sortState = {...sortChange};
    const sortedGroups = [...this.filteredGroupProducts];
    sortedGroups.forEach(group => {
      group.list = [...group.list].sort((a,b) => {
        if (a[sortChange.orderByColumn] > b[sortChange.orderByColumn]) {return -1;}
        if (a[sortChange.orderByColumn] < b[sortChange.orderByColumn]) {return 1;}
        return 0;
      })
    })
    if (sortChange.orderBySort === SortStates.asc) {
      this.filteredGroupProducts = sortedGroups.sort((a, b) => {
        if (a.list[0][sortChange.orderByColumn] > b.list[0][sortChange.orderByColumn]) {return 1;}
        if (a.list[0][sortChange.orderByColumn] < b.list[0][sortChange.orderByColumn]) {return -1;}
        return 0;
      });
    } else if(sortChange.orderBySort === SortStates.desc) {
      this.filteredGroupProducts = sortedGroups.sort((a, b) => {
        if (a.list[0][sortChange.orderByColumn] > b.list[0][sortChange.orderByColumn]) {return -1;}
        if (a.list[0][sortChange.orderByColumn] < b.list[0][sortChange.orderByColumn]) {return 1;}
        return 0;
      });
    } else {
      this.filteredGroupProducts = [...this.depositGroupProducts];
    }
    this.changeRef.detectChanges();
  }
  onFilterInput(keys: string[], event) {
    const lang = this.translateService.getDefaultLang();
    const inputValue = event.target.value;
    if (!inputValue) {
      this.filteredGroupProducts= [...this.depositGroupProducts];
      return;
    }
    this.filteredGroupProducts = [...this.depositGroupProducts].filter((loan) => {
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
  applyFilter(filterValue: string) {
    const lang = this.translateService.getDefaultLang();
    this.filteredGroupProducts = [...this.depositGroupProducts].filter((group) => {
      return group.list.some((deposit) => Object.keys(deposit).some(key => {
        if (!this.columns.includes(key)) {return false;}
        if (deposit[key] && deposit[key][lang]) {
          // if (!!(deposit[key][lang].toString().toLowerCase().includes(filterValue))) {
          //   console.log(group, key, deposit[key])
          // }
          return !!(deposit[key][lang].toString().toLowerCase().includes(filterValue));
        } else {
          return !!(deposit[key] &&  deposit[key].toString().toLowerCase().includes(filterValue));
        }
      }));
    });
   this.changeRef.detectChanges();
  }
}
