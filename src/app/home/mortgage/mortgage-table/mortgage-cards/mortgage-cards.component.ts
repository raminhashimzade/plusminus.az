import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoanGroup } from 'src/app/home/loans/models/loanGroup.model';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';

@Component({
  selector: 'mortgage-cards',
  templateUrl: './mortgage-cards.component.html',
  styleUrls: ['./mortgage-cards.component.scss']
})
export class MortgageCardsComponent implements OnInit {

  @Input() loanGroupProducts: LoanGroup[];
  @Output() sortChange = new EventEmitter<SortChangeModel>();
  expandedGroupId: number;
  sortState: SortChangeModel;
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
  onSort(sortKey: string) {
    this.sortState = { orderByColumn: sortKey , orderBySort: 'asc'};
    this.sortChange.next(this.sortState);
  }


}
