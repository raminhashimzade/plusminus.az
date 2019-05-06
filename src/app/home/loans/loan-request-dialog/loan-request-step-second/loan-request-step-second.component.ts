import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { LoansService } from '../../loans.service';
import { HttpResponseEnum } from 'src/app/http-response.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'loan-request-step-second',
  templateUrl: './loan-request-step-second.component.html',
  styleUrls: ['./loan-request-step-second.component.scss']
})
export class LoanRequestStepSecondComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @Input() firstStepData: {gsm: string, channel: string};
  @Output() stepComplete = new EventEmitter();
  @Output() stepError = new EventEmitter();
  loading: boolean;
  constructor(private loansServce: LoansService, private translateService: TranslateService) { }

  ngOnInit() {
  }
  onSubmit() {
    if (!this.form.valid) {return;}
    this.loading = true;
    console.log(this.form.value);
    const otpCode = Object.values(this.form.value).join('');
    const newFormValue = {
      gsm: this.firstStepData['gsm'],
      otp: otpCode
    };
    console.log(newFormValue);
    this.loansServce.checkOTP(newFormValue)
    .subscribe(res => {
      if (res && (res.success === HttpResponseEnum.success)) {
        this.stepComplete.next(newFormValue);
      } else {
        this.stepError.next();
      }
    })
  }
  onKeyUp(input: MatInput | MatButton) {
      input.focus();
  }
  onFocus(controlKey: string) {
      this.form.controls[controlKey].setValue('');
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }


}
