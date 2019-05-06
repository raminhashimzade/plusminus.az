import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatInput } from '@angular/material/input';
import * as moment from 'moment';
import { LoansService } from '../../loans.service';
import { HttpResponseEnum } from 'src/app/http-response.enum';
@Component({
  selector: 'loan-request-step-third',
  templateUrl: './loan-request-step-third.component.html',
  styleUrls: ['./loan-request-step-third.component.scss']
})
export class LoanRequestStepThirdComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @ViewChild('cusFirstNameField') cusFirstNameField: MatInput;
  @Input() firstStepData: {gsm: string,  channel: string};
  @Output() stepComplete = new EventEmitter();
  @Output() stepError = new EventEmitter();
  cusOfficialIncome = false;
  cusUnOfficialIncome = false;
  cusVoen = false;
  loanCurrencyCode = 'AZN';
  startDate = new Date(2001, 0, 1);
  loading: boolean;
  constructor(private translateService: TranslateService, private loansService: LoansService) { }

  ngOnInit() {
    setTimeout(() => {
      this.cusFirstNameField.focus();
   this.form.valueChanges.subscribe(res => {
    // console.log(this.form.controls['cusBirthDate'].value);
    // console.log(moment(this.form.controls['cusBirthDate'].value).unix());
    // console.log(this.form.controls['cusBirthDate'].value.format('ss'))
   });
    }, 300);
  }
  onSubmit() {
    if (!this.form.valid) {return;}
    this.loading = true;
    const formValue = this.form.value;
    const newFormValue = {
      ...formValue,
      requestType: "LOAN",
      requestProductId: "LN_ID",
     cusBirthDate:'19880101000000'
 // cusBirthDate: moment(this.form.controls['cusBirthDate'].value).unix()
    }
    console.log(newFormValue);
    this.loansService.postLoanOrder(newFormValue)
    .subscribe(res => {
      if (res && (res.success === HttpResponseEnum.success)) {
        this.stepComplete.next();
      } else {
        this.stepError.next();
      }
    })
   // this.stepComplete.next();
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }
  onNumInput(e, controlKey: string) {
    const value = e.target.value;
    this.form.controls[controlKey].setValue(value.replace(/[^\d]/,''))
  }

}
