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
    slidesPerView: 3,
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
    breakpoints: {
      1700: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1199: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    }
  };
  constructor() {}

  ngOnInit() {
    this.initSwiper();
  }
  ngOnDestroy() {
    this.swiper && this.swiper.destroy();
  }
  initSwiper() {
    this.swiper && this.swiper.destroy();
    setTimeout(() => {
      this.swiper = new Swiper('.swiper-container', this.config);
    }, 0);
  }
}
