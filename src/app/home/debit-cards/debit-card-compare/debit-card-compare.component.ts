import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { DebitCard } from '../models/debit-card.model';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { DebitCardService } from '../debit-card.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { finalize, map, switchMap, take } from 'rxjs/operators';
import { isMobileSize } from 'src/app/app.utils';
import { DocumentDialogComponent } from 'src/app/shared/components/document-dialog/document-dialog.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'debit-card-compare',
  templateUrl: './debit-card-compare.component.html',
  styleUrls: ['./debit-card-compare.component.scss']
})
export class DebitCardCompareComponent implements OnInit {
  products: DebitCard[];
  visibleProducts: DebitCard[];
  pageIndex = 0;
  itemsPerTable = 3;
  loading: boolean;
/** Mobile only */
  swiper: any;
  isMobile: boolean; // whether it is mobile mode
 public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
     slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: true,
    },
  };
  @HostListener('window:resize', ['$event']) resize() { this.buildView()}

  constructor(private productService: DebitCardService,
    private router: Router, private route: ActivatedRoute,
    private dialog: MatDialog,
    public translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.queryParams['dpID'];
    if (id) {
      this.getPreviewProduct(id);
    } else {
    this.getCompareProductList();
    }
  }

  getPreviewProduct(id: number) {
    this.loading = true;
    this.productService.getCompareProductList([id], this.productService.productFilterValue)
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
    if (!(this.productService.compareProductList.length > 0)) {
      this.router.navigateByUrl('/home/debit-cards');
    }
    this.productService.getSavedCompareProductList()
    .pipe(
      map((products: DebitCard[]) => products.map(p => p.cdID) ),
      switchMap((productIds: number[]) => this.productService.getCompareProductList(productIds, this.productService.productFilterValue)),
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
    if (!isPlatformBrowser(this.platformId)) {return; }
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

  buildView() {
    this.isMobile = isMobileSize();
    if (this.isMobile) {
    //  this.initSwiper();
    }
      this.setVisibleProducts();
  }

  openDocumentDialog(documentData, type: string) {
    const text= documentData[this.translateService.getDefaultLang()]
    this.dialog.open(DocumentDialogComponent, {
      data: {
        title: this.translateService.instant(type),
        text: text
      },
      width: '300px',
      maxHeight: '90vh'
    })
  }


}
