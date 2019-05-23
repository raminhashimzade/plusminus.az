import { Component, OnInit } from '@angular/core';
import { LoansService } from '../../loans/loans.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoanRequestDialogComponent } from '../../loans/loan-request-dialog/loan-request-dialog.component';
import { isMobileSize } from 'src/app/app.utils';
import { LoanProduct } from '../../loans/models/loanGroup.model';

@Component({
  selector: 'loan-compare-preview',
  templateUrl: './loan-compare-preview.component.html',
  styleUrls: ['./loan-compare-preview.component.scss']
})
export class LoanComparePreviewComponent implements OnInit {
  loans$: Observable<LoanProduct[]>;
  constructor(private loansService: LoansService, private router: Router, private dialog: MatDialog) {
    this.loans$ = this.loansService.getSavedCompareProductList();
  }

  ngOnInit() {
  }
  onRemoveLoanFromCompareList(loan: LoanProduct) {
    this.loansService.removeProductFromCompare(loan);
  }
  onCompare() {
    const el = document.getElementById('header__loanCompare__preview');
    if ( el) { el.style.display  = 'none'; }
    this.router.navigateByUrl('/home/loans/compare');
  }
  onRequestLoansFromBanks(loans: LoanProduct[]) {
    console.log(loans);
    if (!(loans && loans.length > 0)) {return;}
    const requestBankId = loans.map(l => l.bankID);
    const ref  = this.dialog.open(LoanRequestDialogComponent, {
      panelClass: 'loanRequestDialog',
      autoFocus: false,
      maxWidth: '99vw',
      disableClose: true,
      position: isMobileSize() && {top: '0'},
      data: {
        requestBankId: requestBankId
      }
    });
  }

}
