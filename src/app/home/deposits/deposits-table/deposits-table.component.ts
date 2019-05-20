import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepositCalcForm } from '../models/deposit-calc-form.model';
import { DepositService } from '../deposit.service';
import { finalize } from 'rxjs/operators';
import { switchToView, isMobileSize } from 'src/app/app.utils';
import { DepositProduct } from '../models/deposit.model';
import { Observable, of } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'deposits-table',
  templateUrl: './deposits-table.component.html',
  styleUrls: ['./deposits-table.component.scss']
})
export class DepositsTableComponent implements OnInit {
  currentFormValues: DepositCalcForm;
  loading: boolean;
  depositProducts: DepositProduct[];
  showColgroup: boolean;
  @HostListener('window:resize', ['$event']) resize() { this.updateForLayoutChange()}
  constructor(
    private route: ActivatedRoute,
    private depositService: DepositService,
    private changeRef: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver
    ) { }

  ngOnInit() {
    this.showColgroup = this.breakpointObserver.isMatched('(min-width: 768px)');
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
  }
  updateForLayoutChange() {
    this.showColgroup = this.breakpointObserver.isMatched('(min-width: 768px)');
  }
  listenToRouterParams() {
    this.route.params.subscribe(res => {
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
  }
  getListDepositProducts(data: DepositCalcForm) {
    console.log('get prod')
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

}
