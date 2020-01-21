import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoanProduct, LoanGroup } from '../../models/loanGroup.model';
import { LoansService } from '../../loans.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';

@Component({
  selector: 'loans-cards',
  templateUrl: './loans-cards.component.html',
  styleUrls: ['./loans-cards.component.scss']
})
export class LoansCardsComponent implements OnInit {
  @Input() loanGroupProducts: LoanGroup[];
  @Output() sortChange = new EventEmitter<SortChangeModel>();
  expandedGroupId: number;
  sortState: SortChangeModel;
  constructor(private loanService: LoansService) { }

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
  canAddProductToCompare(loanID: number): Observable<boolean> {
    return this.loanService.getSavedCompareProductList()
      .pipe(map((loans: LoanProduct[]) => !!loans.find(l => l.lnID === loanID)));
  }
  onAddProductToCompare(loan: LoanProduct) {
    this.loanService.addProductToCompare(loan);
   // this.changeRef.detectChanges();
  }
}
