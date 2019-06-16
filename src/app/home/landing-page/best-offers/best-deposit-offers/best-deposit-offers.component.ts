import { Component, OnInit } from '@angular/core';
import { MockDepositOffers } from './mock-deposit-offfers';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
declare var Swiper;

@Component({
  selector: 'best-deposit-offers',
  templateUrl: './best-deposit-offers.component.html',
  styleUrls: ['./best-deposit-offers.component.scss']
})
export class BestDepositOffersComponent implements OnInit {
  offers = MockDepositOffers;
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
    // breakpoints: {
    //   1700: {
    //     slidesPerView: 3,
    //     slidesPerGroup: 3
    //   },
    //   1199: {
    //     slidesPerView: 3,
    //     slidesPerGroup: 3
    //   },
    //   992: {
    //     slidesPerView: 2,
    //     slidesPerGroup: 2
    //   },
    //  768: {
    //     slidesPerView: 1,
    //     slidesPerGroup: 1
    //   },
    //   576: {
    //     slidesPerView: 1,
    //     slidesPerGroup: 1
    //   }
    // }
  };
  constructor() {}

  ngOnInit() {
    this.initSwiper();
  }
  ngOnDestroy() {
   this.swiper &&  this.swiper.destroy(true, true)
 // this.swiper && this.swiper.destroy();
  }
  initSwiper() {
  //  this.swiper && this.swiper.destroy();
    setTimeout(() => {
      this.swiper = new Swiper('#swiper-deposits', this.config);
    }, 0);
  }

}
