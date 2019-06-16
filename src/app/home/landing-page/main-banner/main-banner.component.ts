import { Component, OnInit } from '@angular/core';
import { MockSlides } from './mock-slides';
import { SlideModel } from './slide.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { rotateCubeToLeft } from 'ngx-router-animations';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
  animations: [
    trigger('rotateCubeToLeft', [
      transition(':enter', useAnimation(rotateCubeToLeft))
    ])
  ]
})
export class MainBannerComponent implements OnInit {
  slides: SlideModel[] = MockSlides;
  slideIndex = 0;
  slideCount: number = 2 ;
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: { el: '.swiper-pagination', clickable: true }
  };
  constructor() {}

  ngOnInit() {}


}
