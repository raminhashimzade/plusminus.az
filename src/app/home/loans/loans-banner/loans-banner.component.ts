import { Component, OnInit, EventEmitter, ViewChild, Output, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoansService } from '../loans.service';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'loans-banner',
  templateUrl: './loans-banner.component.html',
  styleUrls: ['./loans-banner.component.scss']
})
export class LoansBannerComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('f') form: NgForm;
  loanPeriods$: Observable<any>;
  @Output() bannerFormSubmit = new EventEmitter<NgForm>();
  loanCurrency = 'AZN';
  _onDestroy$ = new Subject<void>();
  constructor(private loansService: LoansService,
     private translateService: TranslateService,
     private router: Router,
     private route: ActivatedRoute
     ) {
    this.loanPeriods$ = this.loansService.listLoanPeriods();
   }

  ngOnInit() {
   setTimeout(() =>  this.listenToRouterParams(), 10)
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  onSubmit(f: NgForm) {
    if (!f.valid) {return;}
    this.router.navigate(['/home/loans',
    { loanAmount: f.value.loanAmount, loanCurrency: f.value.loanCurrency, loanPeriod: f.value.loanPeriod}]);
  //  this.bannerFormSubmit.next(f);
  }
  onNumInput(e: any) {
    const value = e.target.value;
    this.form.controls['loanAmount'].setValue(value.replace(/[^\d]/,''))
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }
  listenToRouterParams() {
    this.route.params
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(res => {
      const loanAmount = res['loanAmount'];
      const loanCurrency = res['loanCurrency'];
      const loanPeriod = res['loanPeriod'] || 0;
      if (loanAmount && loanCurrency) {
        this.form.form.controls['loanAmount'].setValue(+loanAmount);
        this.form.form.controls['loanCurrency'].setValue(loanCurrency);
        this.form.form.controls['loanPeriod'].setValue(+loanPeriod);
      }
    });
  }

}
