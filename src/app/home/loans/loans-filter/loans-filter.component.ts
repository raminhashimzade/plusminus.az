import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LoansService } from '../loans.service';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { MatSliderChange, MatDialog } from '@angular/material';
import { LoanRequestDialogComponent } from '../loan-request-dialog/loan-request-dialog.component';
import { isMobileSize } from 'src/app/app.utils';

@Component({
  selector: 'loans-filter',
  templateUrl: './loans-filter.component.html',
  styleUrls: ['./loans-filter.component.scss']
})
export class LoansFilterComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  loanCurrency = 'AZN';
  loanPeriods$: Observable<any>;
  slideValue: number;
  _onDestroy$ = new Subject<void>();
  constructor(
      private translateService: TranslateService,
      private loanService: LoansService,
      private router: Router,
      private route: ActivatedRoute,
      private dialog: MatDialog
     ) {
    this.loanPeriods$ = this.loanService.listLoanPeriods();
  }

  ngOnInit() {
    setTimeout(() => this.listenToformChange(), 20);
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
      const loanAmount = res['loanAmount'];
      if (loanAmount) {
        this.slideValue = +loanAmount;
      }
      Object.keys(res).forEach(key => {
        if (this.form.controls[key]) {
          this.form.controls[key].setValue(res[key]);
        }
      })
    });
  }
  listenToformChange() {
    console.log('start listen')
    this.form.valueChanges
    .pipe(
    debounceTime(500),
     takeUntil(this._onDestroy$)
    )
    .subscribe(res => {
  //  if (!this.form.value.loanAmount || !this.form.value.loanCurrency) {return;}
      this.searchLoans();
    });
  }
  onSubmit() {
    this.searchLoans();
  }
  searchLoans() {
    console.log('search');
    const filterForm = {};
      Object.keys(this.form.value).forEach(key => {
        if (this.form.controls[key].value) {
          filterForm[key] = this.form.controls[key].value;
        };
      });
    this.router.navigate(['/home/loans',
    {
    ...filterForm
   } ]);
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }
  onSlideMove(change: MatSliderChange) {
    this.slideValue = change.value;
  }

  onRequestLoansFromAllBanks() {
    const ref = this.dialog.open(LoanRequestDialogComponent, {
      panelClass: 'loanRequestDialog',
      autoFocus: false,
      maxWidth: '90vw',
      disableClose: true,
      position: isMobileSize() && {top: '0'}
    });
  }
  setInitialCheckboxesToFalse() {
    Object.keys(this.form.controls).forEach(controlKey => {
      if (!this.form.controls[controlKey].value) {
        this.form.controls[controlKey].setValue(false);
      }
    });
   // this.changeRef.detectChanges();
  }


}
