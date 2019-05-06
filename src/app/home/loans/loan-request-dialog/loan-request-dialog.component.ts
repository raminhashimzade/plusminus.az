import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-loan-request-dialog',
  templateUrl: './loan-request-dialog.component.html',
  styleUrls: ['./loan-request-dialog.component.scss'],

})
export class LoanRequestDialogComponent implements OnInit {
  stepIndex = environment.production ? 1 : 3;
  firstStepData: {gsm: string,  channel: string};
  stepError: boolean;
  constructor(public dialogRef: MatDialogRef<LoanRequestDialogComponent>) { }

  ngOnInit() {
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

}
