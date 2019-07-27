import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { DepositProduct } from 'src/app/home/deposits/models/deposit-group.model';
import { DepositService } from 'src/app/home/deposits/deposit.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'deposit-compare-preview',
  templateUrl: './deposit-compare-preview.component.html',
  styleUrls: ['./deposit-compare-preview.component.scss']
})
export class DepositComparePreviewComponent implements OnInit {

  products$: Observable<DepositProduct[]>;
   showMenu: boolean;
  constructor(
    private depositService: DepositService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router, private dialog: MatDialog) {
    this.products$ = this.depositService.getSavedCompareProductList();
  }

  ngOnInit() {
  }
  get isProductExist() {
    return this.depositService.getSavedCompareProductList();
  }
  onRemoveFromCompareList(deposit: DepositProduct) {
    this.depositService.removeProductFromCompare(deposit);
  }
  canAddProductToCompare(loanID: number): Observable<boolean> {
    return this.depositService.getSavedCompareProductList()
      .pipe(map((loans: DepositProduct[]) => !!loans.find(l => l.dpID=== loanID)));
  }
  onCompare() {
    if (!isPlatformBrowser(this.platformId)) {return;}
    const el = document.getElementById('header__depositCompare__preview');
    if ( el) { el.style.display  = 'none'; }
    this.router.navigateByUrl('/home/deposits/compare');
  }


}
