import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DebitCardFilterForm } from '../models/debit-card-filter-form.model';
import { DebitCardService } from '../debit-card.service';
import { NgForm } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'debit-cards-filter',
  templateUrl: './debit-cards-filter.component.html',
  styleUrls: ['./debit-cards-filter.component.scss']
})
export class DebitCardsFilterComponent implements OnInit {


  @ViewChild('f', { static: true }) form: NgForm;
  currencyCode = 'AZN';
  slideValue: number;
  isMdSize: boolean;
  _onDestroy$ = new Subject<void>();
  currCodes$: Observable<SelectType[]>;
  periods$: Observable<SelectType[]>;
  productFilter = new DebitCardFilterForm();
  @HostListener('window:resize', ['$event']) resize() { this.updateForLayoutChange() }
  constructor(
      private translateService: TranslateService,
      private sharedService: SharedService,
      private router: Router,
      private route: ActivatedRoute,
      private breakPointObserver: BreakpointObserver,
      private  productService: DebitCardService
     ) {
    this.currCodes$ = this.sharedService.getCurrCodeList('credit-cards');
   // this.periods$ = this.sharedService.getCurrCodeList('credit-cards');
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
      Object.keys(res).forEach(key => {
        if (this.form.controls[key]) {
          if (this.form.controls[key].value === res[key]) {return;}
          this.form.controls[key].setValue(res[key]);
        }
      })
    });
  }
  listenToformChange() {
    this.form.valueChanges
    .pipe(
     takeUntil(this._onDestroy$)
    )
    .subscribe(res => {
  //  if (!this.form.value.loanAmount || !this.form.value.loanCurrency) {return;}
      this.seachProducts();
    });
  }
  onSubmit() {
    this.seachProducts(true);
  }
  seachProducts(scrollIntoView: boolean = false) {
   // if (!this.form.valid) {return;}
    const filterForm = {};
      Object.keys(this.form.value).forEach(key => {
        if (this.form.controls[key].value || this.form.controls[key].value === false) {
          filterForm[key] = this.form.controls[key].value;
        };
      });
    this.router.navigate(['/home/debit-cards',
    {
      ...filterForm,
   } ]);
  }


}
