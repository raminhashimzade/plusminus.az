import { Component, OnInit, ViewChild, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject, fromEvent } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LoansService } from '../loans.service';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSliderChange } from '@angular/material/slider';
import { LoanRequestDialogComponent } from '../loan-request-dialog/loan-request-dialog.component';
import { isMobileSize, deepClone } from 'src/app/app.utils';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';
import { LoanFilterForm } from '../models/loan-filter-form';
import { CreditCardFilterForm } from '../../credit-cards/models/credit-card-filter-form.model';

@Component({
  selector: 'loans-filter',
  templateUrl: './loans-filter.component.html',
  styleUrls: ['./loans-filter.component.scss']
})
export class LoansFilterComponent implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;
  @Output('searchSubmit') searchSubmit = new EventEmitter<CreditCardFilterForm>();
  periods$: Observable<any>;
  slideValue: number;
  isMdSize: boolean;
  _onDestroy$ = new Subject<void>();
  currCodes$: Observable<SelectType[]>
  productFilter = new LoanFilterForm();
  slideChange$ = new Subject<number>();
  loading$: Observable<boolean>;
  @HostListener('window:resize') resize() { this.updateForLayoutChange() }
  constructor(
      private translateService: TranslateService,
      private productService: LoansService,
      private sharedService: SharedService,
      private router: Router,
      private route: ActivatedRoute,
      private dialog: MatDialog,
      private breakPointObserver: BreakpointObserver
     ) {
    this.periods$ = this.productService.listLoanPeriods();
    this.currCodes$ = this.sharedService.getCurrCodeList('loans');
    this.loading$ = this.productService.loadingProducts$;
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
    this.listenToSlideMove();
    setTimeout(() => this.listenToRouterParams(), 10);
  }
  listenToRouterParams() {
    this.route.params
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(res => {
      const loanAmount = res['loanAmount'];
      if (loanAmount) {
        this.slideValue = +loanAmount;
        this.productFilter.loanAmount = this.slideValue;
      }
      Object.keys(res).forEach(key => {
        if (this.form.controls[key]) {
          if (this.form.controls[key].value === res[key]) {return;}
          this.form.controls[key].setValue(res[key]);
        }
      })
      this.productService.loanFilterValue = deepClone(this.form.value);
    });
  }
  listenToformChange() {
    this.form.valueChanges
    .pipe(
     takeUntil(this._onDestroy$)
    )
    .subscribe(res => {
  //  if (!this.form.value.loanAmount || !this.form.value.loanCurrency) {return;}
     this.productService.loanFilterValue = deepClone(this.form.value);
      this.searchProducts();
    });
  }
  onSubmit() {
    this.searchProducts();
    this.searchSubmit.next(this.form.value);
  }
  searchProducts() {
    const filterForm = {};
      Object.keys(this.form.value).forEach(key => {
        if (this.form.controls[key].value || this.form.controls[key].value === false) {
          filterForm[key] = this.form.controls[key].value;
        };
      });
      this.productService.loanFilterValue = deepClone(this.form.value);
    this.router.navigate(['/home/loans',
    {
      ...filterForm,
   } ]);
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }
  onSlideMove(change: MatSliderChange) {
    this.slideChange$.next(change.value);

  }
  listenToSlideMove() {
    this.slideChange$
    .pipe(
      debounceTime(500),
    ).subscribe(res => {
      this.slideValue = res;
     this.productFilter.loanAmount = res;
    })
  }

  onRequestLoansFromAllBanks() {
    const ref = this.dialog.open(LoanRequestDialogComponent, {
      panelClass: 'loanRequestDialog',
      autoFocus: false,
      maxWidth: '90vw',
      disableClose: true,
      position: isMobileSize() && {top: '10px'}
    });
  }


}
