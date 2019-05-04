import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'loan-request-step-third',
  templateUrl: './loan-request-step-third.component.html',
  styleUrls: ['./loan-request-step-third.component.scss']
})
export class LoanRequestStepThirdComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @Input() firstStepData: Object;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {

  }
  getErrorMessage() {

  }

}
