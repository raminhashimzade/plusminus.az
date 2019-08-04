import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'loan-request-dialog',
  templateUrl: './loan-request-dialog.component.html',
  styleUrls: ['./loan-request-dialog.component.scss'],

})
export class LoanRequestDialogComponent implements OnInit {
  stepIndex = 1;
  firstStepData: {gsm: string,  channel: string};
  stepError: boolean;
  requestBankId = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<LoanRequestDialogComponent>) { }

  ngOnInit() {
    if (this.data && this.data.requestBankId) {
      this.requestBankId = this.data.requestBankId;
    }
  }
  onFirstStepComplete(data) {
    this.firstStepData = data;
    this.stepIndex = 2;
  }
  onSecondStepComplete() {
    this.stepIndex = 3;
  }
  onThirdStepComplete() {
    this.stepIndex = 4;
  }
  onStepError() {
    this.stepIndex = undefined;
    this.stepError = true;
  }
  onStepBack(stepIndex: number) {
    this.stepIndex = stepIndex;
  }

}
