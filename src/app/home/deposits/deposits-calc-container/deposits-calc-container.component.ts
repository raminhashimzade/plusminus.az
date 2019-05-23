import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { DepositService } from '../deposit.service';
import { MatSliderChange } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DepositCalcForm } from '../models/deposit-calc-form.model';
import { throttleTime, takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'deposits-calc-container',
  templateUrl: './deposits-calc-container.component.html',
  styleUrls: ['./deposits-calc-container.component.scss']
})
export class DepositsCalcContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  depositCurrency = 'AZN';
  depositPeriods$: Observable<any>;
  slideValue: number;
  _onDestroy$ = new Subject<void>();
  constructor(
      private translateService: TranslateService,
      private depositService: DepositService,
      private router: Router,
      private route: ActivatedRoute
     ) {
    this.depositPeriods$ = this.depositService.listDepositPeriod();
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this._onDestroy$.next();
  }
  ngAfterViewInit() {
    setTimeout(() => this.listenToRouterParams(), 10);
    setTimeout(() => this.listenToformChange(), 20);
  }
  listenToRouterParams() {
    this.route.params
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(res => {
      const depositAmount = res['depositAmount'];
      const depositCurrency = res['depositCurrency'];
      const depositPeriod = res['depositPeriod'];
      if (depositAmount) {
        this.slideValue = +depositAmount;
      }
      depositCurrency &&  this.form.controls['depositCurrency'].setValue(depositCurrency);
      depositPeriod &&  this.form.controls['depositPeriod'].setValue(+depositPeriod);
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
      this.searchDeposits();
    });
  }
  onSubmit() {
    this.searchDeposits();
  }
  searchDeposits() {
    console.log('search')
    this.router.navigate(['/home/deposits',
    { depositAmount: this.form.value.depositAmount || '',
    depositCurrency: this.form.value.depositCurrency ||  this.depositCurrency,
    depositPeriod: this.form.value.depositPeriod || ''
   } as DepositCalcForm]);
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }
  onSlideMove(change: MatSliderChange) {
    this.slideValue = change.value;
  }
}
