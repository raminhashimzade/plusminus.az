import { Component, OnInit, HostListener } from '@angular/core';
import { DepositService } from '../deposit.service';
import { DepositProduct } from '../models/deposit-group.model';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize, map, switchMap, take } from 'rxjs/operators';
import { isMobileSize } from 'src/app/app.utils';
import { MatDialog } from '@angular/material';
import { DocumentDialogComponent } from 'src/app/shared/components/document-dialog/document-dialog.component';
import { TranslateService } from '@ngx-translate/core';
declare var Swiper;
@Component({
  selector: 'deposits-compare',
  templateUrl: './deposits-compare.component.html',
  styleUrls: ['./deposits-compare.component.scss']
})
export class DepositsCompareComponent implements OnInit {

  products: DepositProduct[];
  visibleProducts: DepositProduct[];
  pageIndex = 0;
  itemsPerTable = 3;
  loading: boolean;
/** Mobile only */
  swiper: any;
  isMobile: boolean; // whether it is mobile mode
  @HostListener('window:resize', ['$event']) resize() { this.buildView()}

  constructor(private depositService: DepositService,
    private router: Router, private route: ActivatedRoute,
    private dialog: MatDialog,
    private translateService: TranslateService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.queryParams['dpID'];
    if (id) {
      this.getPreviewProduct(id);
    } else {
   // this.getCompareProductList();
    this.getPreviewProduct(id);
    }
  }
  getPreviewProduct(id: number) {
    this.loading = true;
    this.depositService.getCompareProductList([6,7,8,9])
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
    if (!(this.depositService.compareProductList.length > 0)) {
      this.router.navigateByUrl('/home/deposits');
    }
    this.depositService.getSavedCompareProductList()
    .pipe(
      map((products: DepositProduct[]) => products.map(p => p.dpID) ),
      switchMap((productIds: number[]) => this.depositService.getCompareProductList(productIds)),
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
