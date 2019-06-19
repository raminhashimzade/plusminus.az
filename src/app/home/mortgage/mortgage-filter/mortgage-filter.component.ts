import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { TranslateService } from '@ngx-translate/core';
import { LoansService } from '../../loans/loans.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import {  MatSliderChange } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'mortgage-filter',
  templateUrl: './mortgage-filter.component.html',
  styleUrls: ['./mortgage-filter.component.scss']
})
export class MortgageFilterComponent implements OnInit {

  @ViewChild('f') form: NgForm;
 loanCurrency = 'AZN';
 loanPeriods$: Observable<any>;
  slideValue: number;
  isMdSize: boolean;
  _onDestroy$ = new Subject<void>();
  currCodes$: Observable<SelectType[]>
  @HostListener('window:resize', ['$event']) resize() { this.updateForLayoutChange() }
  constructor(
      private translateService: TranslateService,
      private loanService: LoansService,
      private sharedService: SharedService,
      private router: Router,
      private route: ActivatedRoute,
      private breakPointObserver: BreakpointObserver
     ) {
    this.loanPeriods$= this.loanService.listLoanPeriods();
    this.currCodes$ = this.sharedService.getCurrCodeList('mortgage');
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
    if (!this.form.valid) {return;}
    const filterForm = {};
      Object.keys(this.form.value).forEach(key => {
        if (this.form.controls[key].value) {
          filterForm[key] = this.form.controls[key].value;
        };
      });
    this.router.navigate(['/home/mortgage',
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
   // this.mo.depositAmount = this.slideValue;
  }

}
