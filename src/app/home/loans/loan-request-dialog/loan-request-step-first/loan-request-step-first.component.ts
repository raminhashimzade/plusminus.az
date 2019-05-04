import { Component, OnInit, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoansService } from '../../loans.service';
import { TranslateService } from '@ngx-translate/core';
import { MatInput } from '@angular/material/input';
import { HttpResponseEnum } from 'src/app/http-response.enum';

@Component({
  selector: 'loan-request-step-first',
  templateUrl: './loan-request-step-first.component.html',
  styleUrls: ['./loan-request-step-first.component.scss']
})
export class LoanRequestStepFirstComponent implements OnInit, AfterViewInit {
  @Output() stepComplete = new EventEmitter();
  @Output() stepError = new EventEmitter();
  @ViewChild('f') form: NgForm;
  @ViewChild('telField') telField: MatInput;
  inputPrefix = '50';
  loading: boolean;
  checked: boolean;
  constructor(private loansService: LoansService, private translateService: TranslateService) { }

  ngOnInit() {
    setTimeout(() => {
      this.telField.focus();
    }, 300);
  }
  ngAfterViewInit() {

  }
  onSubmit() {
    this.form.controls['checked'].markAsTouched();
    if (!this.form.valid) {return;}
    this.loading = true;
    const telNumber = `994${this.inputPrefix}${this.form.controls['gsm'].value}`;
    const newFormValue = {
      gsm: telNumber,
      channel: 'LOAN'
    }
    console.log(newFormValue);
    this.loansService.sendOtp(newFormValue)
    .subscribe(res => {
      if (res && (res.success === HttpResponseEnum.success)){
        this.stepComplete.next(newFormValue);
      } else {
        this.stepError.next();
      }
    });
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
