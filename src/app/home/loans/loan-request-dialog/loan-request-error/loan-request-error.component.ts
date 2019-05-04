import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'loan-request-error',
  templateUrl: './loan-request-error.component.html',
  styleUrls: ['./loan-request-error.component.scss']
})
export class LoanRequestErrorComponent implements OnInit {
  @Output() public close = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
