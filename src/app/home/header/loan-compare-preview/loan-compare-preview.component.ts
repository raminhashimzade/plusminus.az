import { Component, OnInit } from '@angular/core';
import { LoansService } from '../../loans/loans.service';
import { Observable } from 'rxjs';
import { LoanProduct } from '../../loans/models/loanProduct.model';
import { Router } from '@angular/router';

@Component({
  selector: 'loan-compare-preview',
  templateUrl: './loan-compare-preview.component.html',
  styleUrls: ['./loan-compare-preview.component.scss']
})
export class LoanComparePreviewComponent implements OnInit {
  loans$: Observable<LoanProduct[]>;
  constructor(private loansService: LoansService, private router: Router) {
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

}
