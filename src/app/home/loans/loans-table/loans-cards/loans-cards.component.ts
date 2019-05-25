import { Component, OnInit, Input } from '@angular/core';
import { LoanProduct, LoanGroup } from '../../models/loanGroup.model';
import { LoansService } from '../../loans.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'loans-cards',
  templateUrl: './loans-cards.component.html',
  styleUrls: ['./loans-cards.component.scss']
})
export class LoansCardsComponent implements OnInit {
  @Input() loanGroupProducts: LoanGroup[];
  expandedGroupId: number;
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
  canAddProductToCompare(loanID: number): Observable<boolean> {
    return this.loanService.getSavedCompareProductList()
      .pipe(map((loans: LoanProduct[]) => !!loans.find(l => l.lnID === loanID)));
  }
  onAddProductToCompare(loan: LoanProduct) {
    this.loanService.addProductToCompare(loan);
   // this.changeRef.detectChanges();
  }
}
