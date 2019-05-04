import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoansService } from '../../loans.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'loan-request-step-first',
  templateUrl: './loan-request-step-first.component.html',
  styleUrls: ['./loan-request-step-first.component.scss']
})
export class LoanRequestStepFirstComponent implements OnInit {
  @Output() stepComplete = new EventEmitter();
  @ViewChild('f') form: NgForm;
  inputPrefix = '50';
  loading: boolean;
  checked: boolean;
  constructor(private loansService: LoansService, private translateService: TranslateService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.form.controls['checked'].markAsTouched();
    this.loading = true;
    const telNumber = `994${this.inputPrefix}${this.form.controls['gsm'].value}`;
    const newFormValue = {
      gsm: telNumber,
      channel: 'LOAN'
    }
    console.log(newFormValue);
    this.stepComplete.next(newFormValue);
   // this.loansService.sendOtp(newFormValue);
  }
  getErrorMessage() {
    return this.form.controls['gsm'].hasError('required') ?
    `${this.translateService.instant('~pleaseFillTelNumber')}` : ''
  }
  getCheckBoxErrorMessage() {
    if (!this.form.controls['checked'].touched) {return;}
    return `${this.translateService.instant('~pleaseAgreeWithTerms')}`;
  }
  onTelInput(e: any) {
    const value = e.target.value;
    this.form.controls['gsm'].setValue(value.replace(/[^\d]/,''))
  }

}
