import { Component, OnInit, HostListener } from '@angular/core';
import { LoansService } from '../loans.service';
import { map, switchMap, finalize, take, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { isMobileSize } from 'src/app/app.utils';
import { LoanProduct } from '../models/loanGroup.model';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentDialogComponent } from 'src/app/shared/components/document-dialog/document-dialog.component';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
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

  buildView() {
    this.isMobile = isMobileSize();
      this.setVisibleProducts();
  }

  openDocumentDialog(documentData, type: string) {
    const text = documentData[this.translateService.getDefaultLang()]
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
