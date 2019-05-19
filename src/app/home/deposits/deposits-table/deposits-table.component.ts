import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepositCalcForm } from '../models/deposit-calc-form.model';
import { DepositService } from '../deposit.service';
import { finalize } from 'rxjs/operators';
import { switchToView } from 'src/app/app.utils';

@Component({
  selector: 'deposits-table',
  templateUrl: './deposits-table.component.html',
  styleUrls: ['./deposits-table.component.scss']
})
export class DepositsTableComponent implements OnInit {
  currentFormValues: DepositCalcForm;
  loading: boolean;
  depositProducts = [];
  constructor(
    private route: ActivatedRoute,
    private depositService: DepositService,
    private changeRef: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.listenToRouterParams();
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
        // this.depositProducts = res || MoockdepositsData;
        this.depositProducts = res;
        switchToView('#deposits-table-filter');
      });
  }

}
