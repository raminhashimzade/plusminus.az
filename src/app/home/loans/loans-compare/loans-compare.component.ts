import { Component, OnInit, HostListener } from '@angular/core';
import { LoansService } from '../loans.service';
import { map, switchMap, finalize, take, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { isMobileSize } from 'src/app/app.utils';
import { LoanProduct } from '../models/loanGroup.model';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material';
import { DocumentDialogComponent } from 'src/app/shared/components/document-dialog/document-dialog.component';
declare var Swiper;
@Component({
  selector: 'loans-compare',
  templateUrl: './loans-compare.component.html',
  styleUrls: ['./loans-compare.component.scss']
})
export class LoansCompareComponent implements OnInit {

  products: LoanProduct[];
  visibleProducts: LoanProduct[];
  pageIndex = 0;
  itemsPerTable = 3;
  loading: boolean;
/** Mobile only */
  swiper: any;
  isMobile: boolean; // whether it is mobile mode
  @HostListener('window:resize', ['$event']) resize() { this.buildView()}

  constructor(private loanService: LoansService,
    private router: Router, private route: ActivatedRoute,
    private dialog: MatDialog,
    private translateService: TranslateService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.queryParams['lnID'];
    if (id) {
      this.getPreviewProduct(id);
    } else {
      this.getCompareProductList();
   // this.getPreviewProduct(id);
    }
  }
  getPreviewProduct(id: number) {
    this.loading = true;
    this.loanService.getCompareProductList([id], this.loanService.loanFilterValue)
    .pipe(
      finalize(() => this.loading = false)
    )
    .subscribe(res => {
        this.products = res;
        this.buildView();
    });
  }
  getCompareProductList() {
    this.loading = true;
    if (!(this.loanService.compareProductList.length > 0)) {
      this.router.navigateByUrl('/home/loans');
    }
    this.loanService.getSavedCompareProductList()
    .pipe(
      map((products: LoanProduct[]) => products.map(p => p.lnID)),
      switchMap((productIds: number[]) => this.loanService.getCompareProductList(productIds, this.loanService.loanFilterValue)),
      take(1),
      finalize(() => this.loading = false)
    ).subscribe(res => {
      if (!res) {return;}
        this.products = res;
        this.buildView();
    })
  }
  setVisibleProducts() {
    this.setItemsPerTable();
    this.visibleProducts = this.products.slice(this.pageIndex, this.pageIndex + this.itemsPerTable);

  }
  onPrevProduct() {
    if(!this.hasPrevProduct || !this.products) {return;}
    this.pageIndex -=1;
    this.visibleProducts = this.products.slice(this.pageIndex, this.pageIndex + this.itemsPerTable);
  }
  onNextProduct() {
    if(!this.hasNextProduct || !this.products) {return;}
    this.pageIndex +=1;
    this.visibleProducts = this.products.slice(this.pageIndex, this.pageIndex + this.itemsPerTable);
  }
  hasPrevProduct(): boolean {
    return this.pageIndex !== 0;
  }
  hasNextProduct(): boolean {
    if (!this.products) {return;}
    return !(this.pageIndex + this.itemsPerTable >= this.products.length);
  }
  setItemsPerTable() {
    const width  = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    if (width >= 992) {
      this.itemsPerTable= 3;
    } else if (width >= 768 && width < 992) {
     this.itemsPerTable= 2;
    }  else if (width >= 576 && width < 768) {
     this.itemsPerTable= 1;
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
          type: 'progressbar',
          clickable: true,
        },
     //  speed: 600,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-next',
        },
    //    effect: 'cube',
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
          delay: 3000,
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

  openDocumentDialog(documentData) {
    const data = documentData[this.translateService.getDefaultLang()]
    this.dialog.open(DocumentDialogComponent, {
      data: data,
      width: '300px',
      maxHeight: '90vh'
    })
  }

}
