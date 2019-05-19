import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { DepositService } from '../deposit.service';
import { MatSliderChange } from '@angular/material';
import { Router } from '@angular/router';
import { DepositCalcForm } from '../models/deposit-calc-form.model';

@Component({
  selector: 'deposits-calc-container',
  templateUrl: './deposits-calc-container.component.html',
  styleUrls: ['./deposits-calc-container.component.scss']
})
export class DepositsCalcContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('f') form: NgForm;
  depositCurrency = 'AZN';
  depositPeriods$: Observable<any>;
  slideValue: number;
  constructor(
      private translateService: TranslateService,
      private depositService: DepositService,
      private router: Router
     ) {
    this.depositPeriods$ = this.depositService.listDepositPeriod();
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.listenToformChange();
  }
  listenToformChange() {
    this.form.valueChanges.subscribe(res => {
      if (!this.form.value.depositAmount || !this.form.value.depositCurrency || !this.form.value.depositPeriod) {return;}
      this.router.navigate(['/home/deposits',
         { depositAmount: this.form.value.depositAmount,
         depositCurrency: this.form.value.depositCurrency,
         depositPeriod: this.form.value.depositPeriod
        } as DepositCalcForm]);
    });
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }
  onSlideMove(change: MatSliderChange) {
    this.slideValue = change.value;
  }
}
