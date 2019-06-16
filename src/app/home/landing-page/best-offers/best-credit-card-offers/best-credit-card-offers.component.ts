import { Component } from '@angular/core';
import { MockCreditCardOffer } from './mock-credit-card.offer';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'best-credit-card-offers',
  templateUrl: './best-credit-card-offers.component.html',
  styleUrls: ['./best-credit-card-offers.component.scss']
})
export class BestCreditCardOffersComponent{
  offers = MockCreditCardOffer;
  swiper: any;
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 'auto',
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: { el: '.swiper-pagination', clickable: true }
  };
}
