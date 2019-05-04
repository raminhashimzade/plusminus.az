import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'loan-request-step-second',
  templateUrl: './loan-request-step-second.component.html',
  styleUrls: ['./loan-request-step-second.component.scss']
})
export class LoanRequestStepSecondComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @Input() firstStepData: Object;
  @Output() stepComplete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form.value);
    const otpCode = Object.values(this.form.value).join('');
    const newFormValue = {
      gsm: this.firstStepData['gsm'],
      otp: otpCode
    };
    console.log(newFormValue)
    this.stepComplete.next();
  }


}
