import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { LoansService } from '../../../loans/loans.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoanProduct } from '../../../loans/models/loanGroup.model';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'loan-compare-preview',
  templateUrl: './loan-compare-preview.component.html',
  styleUrls: ['./loan-compare-preview.component.scss']
})
export class LoanComparePreviewComponent implements OnInit {
  products$: Observable<LoanProduct[]>;
   showMenu: boolean;
  constructor(private loansService: LoansService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router, private dialog: MatDialog) {
    this.products$ = this.loansService.getSavedCompareProductList();
  }

  ngOnInit() {
  }
  onRemoveFromCompareList(loan: LoanProduct) {
    this.loansService.removeProductFromCompare(loan);
  }
  onCompare() {
    if (!isPlatformBrowser(this.platformId)) {return;}
    const el = document.getElementById('header__loanCompare__preview');
    if ( el) { el.style.display  = 'none'; }
    this.router.navigateByUrl('/home/loans/compare');
  }
  onRequestLoansFromBanks(loans: LoanProduct[]) {
    if (!(loans && loans.length > 0)) {return;}
    const requestBankId = loans.map(l => l.bankID);
    this.router.navigate(['/home/loans/loan-request', {requestBankId: requestBankId}]);
  }

}
