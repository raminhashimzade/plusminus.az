import { Component, OnInit, HostListener } from '@angular/core';
import { LoansService } from '../loans.service';
import { LoanProduct } from '../models/loanProduct.model';
import { map, switchMap, finalize, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'loans-compare',
  templateUrl: './loans-compare.component.html',
  styleUrls: ['./loans-compare.component.scss']
})
export class LoansCompareComponent implements OnInit {
  loanProducts: LoanProduct[];
  visibleProducts: LoanProduct[];
  pageIndex = 0;
  itemsPerTable = 3;
  loading: boolean;
  @HostListener('window:resize', ['$event']) resize() {this.setVisibleProducts(); }

  constructor(private loansService: LoansService, private router: Router) { }

  ngOnInit() {
    this.getCompareLoanProductList();
  }
  getCompareLoanProductList() {
    this.loading = true;
    if (!(this.loansService.compareProductIds.length > 0)) {
      this.router.navigateByUrl('/home/loans');
    }
    this.loansService.getCompareProductIds()
    .pipe(
      switchMap((productIds: number[]) => this.loansService.getCompareLoanProductList(productIds)),
      take(1),
      finalize(() => this.loading = false)
    ).subscribe(res => {
        this.loanProducts = res;
        this.setVisibleProducts();
    })
  }
  setVisibleProducts() {
    this.setItemsPerTable();
    this.visibleProducts = this.loanProducts.slice(this.pageIndex, this.pageIndex + this.itemsPerTable);

  }
  onPrevProduct() {
    if(!this.hasPrevProduct) {return;}
    this.pageIndex -=1;
    this.visibleProducts = this.loanProducts.slice(this.pageIndex, this.pageIndex + this.itemsPerTable);
  }
  onNextProduct() {
    if(!this.hasNextProduct) {return;}
    this.pageIndex +=1;
    this.visibleProducts = this.loanProducts.slice(this.pageIndex, this.pageIndex + this.itemsPerTable);
  }
  hasPrevProduct(): boolean {
    return this.pageIndex !== 0;
  }
  hasNextProduct(): boolean {
    return !(this.pageIndex + this.itemsPerTable >= this.loanProducts.length);
  }
  setItemsPerTable() {
    const width  = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    if (width >= 992) {
      this.itemsPerTable= 3;
    } else if (width >= 768 && width < 992) {
     this.itemsPerTable= 2;
    } else if (width > 0 && width < 768) {
       this.itemsPerTable= 1;
     }
  }

}
