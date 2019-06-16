import { Component} from '@angular/core';
import { MockDebitCardOffer } from './mock-debit-card.offer';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'best-debit-card-offers',
  templateUrl: './best-debit-card-offers.component.html',
  styleUrls: ['./best-debit-card-offers.component.scss']
})
export class BestDebitCardOffersComponent {
  offers = MockDebitCardOffer;
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
