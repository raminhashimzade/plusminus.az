import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DepositService } from '../../deposit.service';
import { DepositGroup, DepositProduct } from '../../models/deposit-group.model';
import { SortChangeModel } from 'src/app/shared/directives/order-by-column/sort-change.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'deposits-cards',
  templateUrl: './deposits-cards.component.html',
  styleUrls: ['./deposits-cards.component.scss']
})
export class DepositsCardsComponent implements OnInit {
  @Input() depositGroupProducts: DepositGroup[];
  @Output() sortChange = new EventEmitter<SortChangeModel>();
  expandedGroupId: number;
  sortState: SortChangeModel;
  constructor(private depositService: DepositService) { }

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
    return of(null);
    // return this.depositService.getSavedCompareProductList()
    //   .pipe(map((loans: DepositProduct[]) => !!loans.find(l => l.lnID === loanID)));
  }
  onAddProductToCompare(loan: DepositProduct) {
 //   this.depositService.addProductToCompare(loan);
   // this.changeRef.detectChanges();
  }

}
