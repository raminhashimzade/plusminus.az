import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-request-dialog',
  templateUrl: './loan-request-dialog.component.html',
  styleUrls: ['./loan-request-dialog.component.scss']
})
export class LoanRequestDialogComponent implements OnInit {
  stepIndex = 3;
  firstStepData: Object;
  stepError: boolean;
  constructor() { }

  ngOnInit() {
  }
  onFirstStepComplete(data) {
    this.firstStepData = data;
    this.stepIndex = 2;
  }
  onSecondStepComplete() {
    this.stepIndex = 3;
  }
  onStepError() {
    this.stepError = true;
  }

}
