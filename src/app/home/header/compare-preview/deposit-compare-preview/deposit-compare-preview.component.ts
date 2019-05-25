import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepositProduct } from 'src/app/home/deposits/models/deposit-group.model';
import { DepositService } from 'src/app/home/deposits/deposit.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'deposit-compare-preview',
  templateUrl: './deposit-compare-preview.component.html',
  styleUrls: ['./deposit-compare-preview.component.scss']
})
export class DepositComparePreviewComponent implements OnInit {

  products$: Observable<DepositProduct[]>;
   showMenu: boolean;
  constructor(private depositService: DepositService, private router: Router, private dialog: MatDialog) {
    this.products$ = this.depositService.getSavedCompareProductList();
  }

  ngOnInit() {
  }
  onRemoveFromCompareList(deposit: DepositProduct) {
    this.depositService.removeProductFromCompare(deposit);
  }
  onCompare() {
    const el = document.getElementById('header__depositCompare__preview');
    if ( el) { el.style.display  = 'none'; }
    this.router.navigateByUrl('/home/deposits/compare');
  }


}
