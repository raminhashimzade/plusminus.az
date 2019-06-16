import { Component} from '@angular/core';
import { MockDepositOffers } from './mock-deposit-offfers';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'best-deposit-offers',
  templateUrl: './best-deposit-offers.component.html',
  styleUrls: ['./best-deposit-offers.component.scss']
})
export class BestDepositOffersComponent {
  offers = MockDepositOffers;
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
