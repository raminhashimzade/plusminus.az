import { Component, OnInit } from '@angular/core';
import { MockDebitCardOffer } from './mock-debit-card.offer';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
declare var Swiper;
@Component({
  selector: 'best-debit-card-offers',
  templateUrl: './best-debit-card-offers.component.html',
  styleUrls: ['./best-debit-card-offers.component.scss']
})
export class BestDebitCardOffersComponent implements OnInit {
  creidtOffers = MockDebitCardOffer;
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
