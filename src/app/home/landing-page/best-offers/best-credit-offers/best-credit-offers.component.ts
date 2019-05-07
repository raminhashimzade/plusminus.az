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
    slidesPerView = 3;
    public config: SwiperConfigInterface;
    @HostListener('window:resize', ['$event']) resize() {this.onWindowResize(); }
  constructor() { }

  ngOnInit() {
    this.initSwiper();
  }
  ngOnDestroy() {
    this.swiper && this.swiper.destroy();
  }
  onWindowResize(): void {
    this.initSwiper();
  }
  initSwiper() {
    const config = this.getSwiperConfig();
    setTimeout(() => {
      this.swiper && this.swiper.destroy();
        this.swiper = new Swiper('.swiper-container', config);
    }, 0);
  }
  getSwiperConfig() {
    return {
      slidesPerView: this.getSlidesPerView(),
      slidesPerGroup: this.getSlidesPerView(),
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
        // autoplay: {
        //   delay: 2500,
        //   stopOnLastSlide: true
        // },
      };
  }
  getSlidesPerView(): number {
    let value: number;
    if (window.innerWidth > 1500) {
      value = this.slidesPerView = 3;
    } else if (window.innerWidth > 1199 && window.innerWidth < 1500) {
     value = this.slidesPerView = 3;
    } else if (window.innerWidth > 992 && window.innerWidth < 1199) {
     value =  this.slidesPerView = 3;
    } else if (window.innerWidth > 576 && window.innerWidth < 992) {
      value =  this.slidesPerView = 2;
     }  else if (window.innerWidth > 250 && window.innerWidth < 576) {
      value =  this.slidesPerView = 1;
     }
    return value;
  }

}
