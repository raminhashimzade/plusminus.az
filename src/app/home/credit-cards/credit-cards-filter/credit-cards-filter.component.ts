import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSliderChange } from '@angular/material/slider';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { deepClone } from 'src/app/app.utils';
import { CreditCardService } from '../credit-card.service';
import { CreditCardFilterForm } from '../models/credit-card-filter-form.model';

@Component({
  selector: 'credit-cards-filter',
  templateUrl: './credit-cards-filter.component.html',
  styleUrls: ['./credit-cards-filter.component.scss']
})
export class CreditCardsFilterComponent implements OnInit {

  @ViewChild('f', { static: true }) form: NgForm;
  currencyCode = 'AZN';
  periods$: Observable<any>;
  slideValue: number;
  isMdSize: boolean;
  _onDestroy$ = new Subject<void>();
  currCodes$: Observable<SelectType[]>;
  creditCardFilter = new CreditCardFilterForm();
  @HostListener('window:resize', ['$event']) resize() { this.updateForLayoutChange() }
  constructor(
      private translateService: TranslateService,
      private sharedService: SharedService,
      private router: Router,
      private route: ActivatedRoute,
    //  private dialog: MatDialog,
      private breakPointObserver: BreakpointObserver,
      private  productService: CreditCardService
     ) {
  this.periods$ = this.productService.listCardCreditPeriod();
    this.currCodes$ = this.sharedService.getCurrCodeList('credit-cards');
  }

  ngOnInit() {
    setTimeout(() => this.listenToformChange(), 10);
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
    setTimeout(() => this.listenToRouterParams());
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
          if (this.form.controls[key].value === res[key]) {return;}
          this.form.controls[key].setValue(res[key]);
        }
      })
 //     this.loanService.loanFilterValue = deepClone(this.form.value);
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
  //   this.loanService.loanFilterValue = deepClone(this.form.value);
      this.searchLoans();
    });
  }
  onSubmit() {
    this.searchLoans(true);
  }
  searchLoans(scrollIntoView: boolean = false) {
   // if (!this.form.valid) {return;}
    const filterForm = {};
      Object.keys(this.form.value).forEach(key => {
        if (this.form.controls[key].value || this.form.controls[key].value === false) {
          filterForm[key] = this.form.controls[key].value;
        };
      });
    this.router.navigate(['/home/credit-cards',
    {
      ...filterForm,
   //   scrollIntoView: scrollIntoView
   } ]);
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }
  onSlideMove(change: MatSliderChange) {
    this.slideValue = change.value;
    this.creditCardFilter.loanAmount = this.slideValue;
  }

}
