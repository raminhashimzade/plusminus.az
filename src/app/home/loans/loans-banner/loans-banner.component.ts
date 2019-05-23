import { Component, OnInit, EventEmitter, ViewChild, Output, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoansService } from '../loans.service';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil, throttleTime, debounceTime } from 'rxjs/operators';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'loans-banner',
  templateUrl: './loans-banner.component.html',
  styleUrls: ['./loans-banner.component.scss']
})
export class LoansBannerComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('f') form: NgForm;
  loanCurrency = 'AZN';
  loanPeriods$: Observable<any>;
  slideValue: number;
  _onDestroy$ = new Subject<void>();
  constructor(
      private translateService: TranslateService,
      private loanService: LoansService,
      private router: Router,
      private route: ActivatedRoute
     ) {
    this.loanPeriods$ = this.loanService.listLoanPeriods();
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
      const loanAmount = res['loanAmount'];
      const loanCurrency = res['loanCurrency'];
      const loanPeriod = res['loanPeriod'];
   //   if (!(loanAmount && loanCurrency)) {return;}
      if (loanAmount) {
        this.slideValue = +loanAmount;
      }
      loanCurrency &&  this.form.controls['loanCurrency'].setValue(loanCurrency);
      loanPeriod &&  this.form.controls['loanPeriod'].setValue(+loanPeriod);
    });
  }
  listenToformChange() {
    this.form.valueChanges
    .pipe(
      debounceTime(500),
      takeUntil(this._onDestroy$)
    )
    .subscribe(res => {
  //  if (!this.form.value.loanAmount || !this.form.value.loanCurrency) {return;}
      console.log(res)
      this.searchLoans();
    });
  }
  onSubmit() {
    this.searchLoans();
  }
  searchLoans() {
    console.log('search')
    this.router.navigate(['/home/loans',
    { loanAmount: this.form.value.loanAmount || '',
    loanCurrency: this.form.value.loanCurrency ||  this.loanCurrency,
    loanPeriod: this.form.value.loanPeriod || ''
   } ]);
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }
  onSlideMove(change: MatSliderChange) {
    this.slideValue = change.value;
  }

}
