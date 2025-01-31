import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DebitCardService } from 'src/app/home/debit-cards/debit-card.service';
import { DebitCard } from 'src/app/home/debit-cards/models/debit-card.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'debit-card-compare-preview',
  templateUrl: './debit-card-compare-preview.component.html',
  styleUrls: ['./debit-card-compare-preview.component.scss']
})
export class DebitCardComparePreviewComponent implements OnInit {

  products$: Observable<DebitCard[]>;
  showMenu: boolean;
 constructor(
   private productService: DebitCardService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
    ) {
   this.products$ = this.productService.getSavedCompareProductList();
 }

 ngOnInit() {
 }
 get isProductExist() {
   return this.productService.getSavedCompareProductList();
 }
 onRemoveFromCompareList(deposit: DebitCard) {
   this.productService.removeProductFromCompare(deposit);
 }
 canAddProductToCompare(id: number): Observable<boolean> {
   return this.productService.getSavedCompareProductList()
     .pipe(map((products: DebitCard[]) => !!products.find(l => l.cdID=== id)));
 }
 onCompare() {
  if (!isPlatformBrowser(this.platformId)) {return;}
   const el = document.getElementById('header__depositCompare__preview');
   if ( el) { el.style.display  = 'none'; }
   this.router.navigateByUrl('/home/debit-cards/compare');
 }

}
