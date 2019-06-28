import { Component, OnInit, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSliderChange } from '@angular/material/slider';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { DepositService } from '../deposit.service';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';
import { deepClone } from 'src/app/app.utils';
import { DepositCalcForm } from '../models/deposit-calc-form.model';
import { DebitCardFilterForm } from '../../debit-cards/models/debit-card-filter-form.model';

@Component({
  selector: 'deposits-filter',
  templateUrl: './deposits-filter.component.html',
  styleUrls: ['./deposits-filter.component.scss']
})
export class DepositsFilterComponent implements OnInit {
  @Output('searchSubmit') searchSubmit = new EventEmitter<DebitCardFilterForm>();
  @ViewChild('f', { static: true }) form: NgForm;
  depositCurrency = 'AZN';
  depositPeriods$: Observable<any>;
  slideValue: number;
  isMdSize: boolean;
  _onDestroy$ = new Subject<void>();
  currCodes$: Observable<SelectType[]>;
  depositFilter = new DepositCalcForm();
  loading$: Observable<boolean>;

  @HostListener('window:resize', ['$event']) resize() { this.updateForLayoutChange() }
  constructor(
      private translateService: TranslateService,
      private depositService: DepositService,
      private sharedService: SharedService,
      private router: Router,
      private route: ActivatedRoute,
      private dialog: MatDialog,
      private breakPointObserver: BreakpointObserver
     ) {
    this.depositPeriods$ = this.depositService.listDepositPeriod();
    this.currCodes$ = this.sharedService.getCurrCodeList('deposits');
    this.loading$ = this.depositService.loadingProducts$;

  }

  ngOnInit() {
    setTimeout(() => this.listenToformChange(), 20);
    this.isMdSize = this.breakPointObserver.isMatched('(max-width: 992px)');
  }
  get isContainerFluid() {
    return this.breakPointObserver.isMatched('(min-width: 768px) and (max-width: 992px');
  }
  updateForLayoutChange() {
    this.isMdSize = this.breakPointObserver.isMatched('(max-width: 992px)');
  }
  ngOnDestroy(): void {
    this._onDestroy$.next();
  }
  ngAfterViewInit() {
    setTimeout(() => this.listenToRouterParams(), 10);
  }
  listenToRouterParams() {
    this.route.params
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(res => {
      const depositAmount = res['depositAmount'];
      if (depositAmount) {
        this.slideValue = +depositAmount;
      }
      Object.keys(res).forEach(key => {
        if (this.form.controls[key]) {
          if (this.form.controls[key].value === res[key]) {return;}
        this.form.controls[key].setValue(res[key]);
        }
      });
      this.depositService.depositFilterValue= deepClone(this.form.value);
    });
  }
  listenToformChange() {
    this.form.valueChanges
    .pipe(
    debounceTime(500),
     takeUntil(this._onDestroy$)
    )
    .subscribe(res => {
  //  if (!this.form.value.depositAmount || !this.form.value.depositCurrency) {return;}
     this.depositService.depositFilterValue= deepClone(this.form.value);
      this.searchDeposits();
    });
  }
  onSubmit() {
    this.searchDeposits();
    this.searchSubmit.next(this.form.value);

  }
  searchDeposits() {
    console.log('search');
 //   if (!this.form.valid) {return;}
    const filterForm = {};
      Object.keys(this.form.value).forEach(key => {
        if (this.form.controls[key].value || this.form.controls[key].value === false) {
          filterForm[key] = this.form.controls[key].value;
        };
      });
    this.router.navigate(['/home/deposits',
    {
    ...filterForm,
   } ]);
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }
  onSlideMove(change: MatSliderChange) {
    this.slideValue = change.value;
    this.depositFilter.depositAmount = this.slideValue;
  }



}
