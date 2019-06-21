import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/home/credit-cards/models/credit-card.model';
import { CreditCardService } from 'src/app/home/credit-cards/credit-card.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'credit-card-compare-preview',
  templateUrl: './credit-card-compare-preview.component.html',
  styleUrls: ['./credit-card-compare-preview.component.scss']
})
export class CreditCardComparePreviewComponent implements OnInit {

  products$: Observable<CreditCard[]>;
   showMenu: boolean;
  constructor(private creditCardService: CreditCardService, private router: Router) {
    this.products$ = this.creditCardService.getSavedCompareProductList();
  }

  ngOnInit() {
  }
  get isProductExist() {
    return this.creditCardService.getSavedCompareProductList();
  }
  onRemoveFromCompareList(deposit: CreditCard) {
    this.creditCardService.removeProductFromCompare(deposit);
  }
  canAddProductToCompare(id: number): Observable<boolean> {
    return this.creditCardService.getSavedCompareProductList()
      .pipe(map((products: CreditCard[]) => !!products.find(l => l.cdId=== id)));
  }
  onCompare() {
    const el = document.getElementById('header__depositCompare__preview');
    if ( el) { el.style.display  = 'none'; }
    this.router.navigateByUrl('/home/credit-cards/compare');
  }

}
