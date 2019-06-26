import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { LoansService } from '../../loans.service';
import { HttpResponseEnum } from 'src/app/shared/enums/http-response.enum';
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'loan-request-step-second',
  templateUrl: './loan-request-step-second.component.html',
  styleUrls: ['./loan-request-step-second.component.scss']
})
export class LoanRequestStepSecondComponent implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;
  @Input() firstStepData: {gsm: string, channel: string};
  @Output() stepComplete = new EventEmitter();
  @Output() stepError = new EventEmitter();
  @Output() stepBack = new EventEmitter<number>();
  loading: boolean;
  @ViewChild('firstField', { static: true }) firstField: MatInput;
  otpError: boolean;
  constructor(private loansServce: LoansService, private translateService: TranslateService) { }

  ngOnInit() {
    setTimeout(() => {
    this.firstField.focus();
    }, 300)
  }

  onSubmit() {
    if (!this.form.valid) {return;}
    this.loading = true;
    const otpCode = Object.values(this.form.value).join('');
    const newFormValue = {
    // gsm: 12,
      gsm: this.firstStepData['gsm'],
      otp: otpCode
    };
    console.log(newFormValue);
    this.loansServce.checkOTP(newFormValue)
    .pipe(
      finalize(() => this.loading = false)
    )
    .subscribe(res => {
      if (res && (res.success === HttpResponseEnum.success)) {
        this.stepComplete.next(newFormValue);
      } else if (res && (res.errorText === 'OTP not allowed')){
        this.firstField.focus();
        this.otpError = true;
      } else {
        console.log(res)
        this.stepError.next();
      }
    })
  }
  onKeyUp(controlKey: string,  nextInput: MatInput | MatButton, e) {
    const value = e.target.value;
    const replacedValue = value.replace(/[^\d]/,'');
    if (replacedValue) {
      this.form.controls[controlKey].setValue(replacedValue);
      nextInput.focus();
    } else {
      this.form.controls[controlKey].setValue('');
    }
  }
  onFocus(controlKey: string) {
      this.form.controls[controlKey].setValue('');
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }
  onCodeInput(controlKey: string, e: any) {
    const value = e.target.value;
    this.form.controls[controlKey].setValue(value.replace(/[^\d]/,''));
  }
  onStepBack() {
    this.stepBack.next(1);
  }


}
