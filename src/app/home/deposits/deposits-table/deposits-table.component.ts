import { Component, OnInit, ChangeDetectorRef, HostListener, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepositCalcForm } from '../models/deposit-calc-form.model';
import { DepositService } from '../deposit.service';
import { finalize, takeUntil } from 'rxjs/operators';
import { switchToView, isMobileSize } from 'src/app/app.utils';
import { DepositProduct } from '../models/deposit.model';
import { Observable, of, Subject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';
import { SortStates } from 'src/app/shared/directives/order-by-column/sort-states.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'deposits-table',
  templateUrl: './deposits-table.component.html',
  styleUrls: ['./deposits-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepositsTableComponent implements OnInit, OnDestroy {
  currentFormValues: DepositCalcForm;
  loading: boolean;
  depositProducts: DepositProduct[];
  filteredDepositProducts: DepositProduct[];
  showColgroup: boolean;
  sortState: SortChangeModel;
  showFilters: boolean;
  _onDestroy$ = new Subject<void>();
  @HostListener('window:resize', ['$event']) resize() { this.updateForLayoutChange()}
  constructor(
    private route: ActivatedRoute,
    private depositService: DepositService,
    private changeRef: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private translateService: TranslateService
    ) { }

  ngOnInit() {
    this.showColgroup = this.breakpointObserver.isMatched('(min-width: 768px)');
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
    this.getListDepositProducts(data);
    this.changeRef.detectChanges();
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  updateForLayoutChange() {
    this.showColgroup = this.breakpointObserver.isMatched('(min-width: 768px)');
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
        this.getListDepositProducts(formValue);
      }
    });
    this.changeRef.detectChanges();
  }
  getListDepositProducts(data: DepositCalcForm) {
    this.depositProducts = null;
    this.loading = true;
    this.depositService.getListDepositProducts(data)
    .pipe(
      finalize(() => {
         this.loading = false;
         this.changeRef.detectChanges();
      })
    )
      .subscribe(res => {
        this.depositProducts = res;
        this.filteredDepositProducts = res;
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
    if (sortChange.orderBySort === SortStates.asc) {
      this.filteredDepositProducts = [...this.filteredDepositProducts].sort((a, b) => {
        if (a[sortChange.orderByColumn] > b[sortChange.orderByColumn]) {return 1;}
        if (a[sortChange.orderByColumn] < b[sortChange.orderByColumn]) {return -1;}
        return 0;
      });
    } else if(sortChange.orderBySort === SortStates.desc) {
      this.filteredDepositProducts = [...this.filteredDepositProducts].sort((a, b) => {
        if (a[sortChange.orderByColumn] > b[sortChange.orderByColumn]) {return -1;}
        if (a[sortChange.orderByColumn] < b[sortChange.orderByColumn]) {return 1;}
        return 0;
      });
    } else {
      this.filteredDepositProducts = [...this.depositProducts];
    }
    this.changeRef.detectChanges();
  }
  onFilterInput(keys: string[], event) {
    const lang = this.translateService.getDefaultLang();
    const inputValue = event.target.value;
    if (!inputValue) {
      this.filteredDepositProducts = [...this.depositProducts];
      return;
    }
    this.filteredDepositProducts = [...this.depositProducts].filter((loan) => {
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
