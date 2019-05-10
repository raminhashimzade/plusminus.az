import { Component, OnInit, HostListener } from '@angular/core';
import { LoansService } from '../loans.service';
import { LoanProduct } from '../models/loanProduct.model';
import { map, switchMap, finalize, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isMobileSize } from 'src/app/app.utils';
declare var Swiper;
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
/** Mobile only */
  swiper: any;
  isMobile: boolean; // whether it is mobile mode
  @HostListener('window:resize', ['$event']) resize() { this.buildView()}

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
        this.buildView();
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
    } else if (width >= 576 && width < 992) {
     this.itemsPerTable= 2;
    } else if (width > 0 && width < 576) {
       this.itemsPerTable= 3;
     }
  }
  initSwiper() {
    const config = this.getSwiperConfig();
    setTimeout(() => {
      this.swiper && this.swiper.destroy();
      console.log('sw')
        this.swiper = new Swiper('.swiper-container', config);
    }, 0);
  }
  getSwiperConfig() {
    return {
     // autoHeight: true,
      slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        speed: 1500,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-next',
        },
        effect: 'cube',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
         slideShadows : true,
        },
        cubeEffect: {
          shadow: false,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        autoplay: {
          delay: 1500,
          disableOnInteraction: true,
        },
      };
  }
  buildView() {
    this.isMobile = isMobileSize();
    if (this.isMobile) {
      this.initSwiper();
    }
      this.setVisibleProducts();
  }

}
