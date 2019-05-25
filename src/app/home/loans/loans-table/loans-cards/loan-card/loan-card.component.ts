import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { LoanProduct } from '../../../models/loanGroup.model';

@Component({
  selector: 'loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.scss']
})
export class LoanCardComponent implements OnInit {
  @Input() product: LoanProduct;
  @Output() expandGroup = new EventEmitter<number>();
  expandedGroupId: number;
  constructor() { }

  ngOnInit() {
  }
  onExpandGroup(groupId: number) {
    if (this.expandedGroupId === groupId) {
      this.expandedGroupId = undefined;
      return;
    }
    this.expandedGroupId = groupId;
  }

}
