import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { DepositService } from '../deposit.service';
import { MatSliderChange } from '@angular/material';
import { DepositCalcForm } from '../models/deposit-calc-form.model';

@Component({
  selector: 'deposits-calc-container',
  templateUrl: './deposits-calc-container.component.html',
  styleUrls: ['./deposits-calc-container.component.scss']
})
export class DepositsCalcContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('f') form: NgForm;
  @Output() formChange = new EventEmitter<DepositCalcForm>();
  depositCurrency = 'AZN';
  depositPeriods$: Observable<any>;
  slideValue: number;
  constructor(private translateService: TranslateService, private depositService: DepositService) {
    this.depositPeriods$ = this.depositService.listDepositPeriod();
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.listenToformChange();
  }
  listenToformChange() {
    this.form.valueChanges.subscribe(res => {
      this.formChange.next(this.form.value);
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
