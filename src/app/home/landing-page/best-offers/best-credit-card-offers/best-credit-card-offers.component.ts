import { Component, OnInit } from '@angular/core';
import { MockCreditCardOffer } from './mock-credit-card.offer';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
declare var Swiper;
@Component({
  selector: 'best-credit-card-offers',
  templateUrl: './best-credit-card-offers.component.html',
  styleUrls: ['./best-credit-card-offers.component.scss']
})
export class BestCreditCardOffersComponent implements OnInit {

  creidtOffers = MockCreditCardOffer;
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
      this.swiper = new Swiper('.swiper-container', this.config);
    }, 0);
  }
}
