import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'loan-request-step-done',
  templateUrl: './loan-request-step-done.component.html',
  styleUrls: ['./loan-request-step-done.component.scss']
})
export class LoanRequestStepDoneComponent implements OnInit {
  @Output() public close = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
