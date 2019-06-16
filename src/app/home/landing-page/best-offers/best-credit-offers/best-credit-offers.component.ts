import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { MockCreditOffers } from './mock-credit-offer';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
declare var Swiper;
@Component({
  selector: 'best-credit-offers',
  templateUrl: './best-credit-offers.component.html',
  styleUrls: ['./best-credit-offers.component.scss']
})
export class BestCreditOffersComponent implements OnInit, OnDestroy {
  creidtOffers = MockCreditOffers;
  swiper: any;
  public config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    speed: 800,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-next'
    },

  };
  constructor() {}

  ngOnInit() {
    this.initSwiper();
  }
  ngOnDestroy() {
     this.swiper && this.swiper.destroy(true, true);
  }
  initSwiper() {
 //   this.swiper && this.swiper.destroy();
    setTimeout(() => {
      this.swiper = new Swiper('#swiper-credits', this.config);
    }, 0);
  }
}
