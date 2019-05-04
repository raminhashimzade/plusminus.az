import { Component, OnInit } from '@angular/core';
import { MockSlides } from './mock-slides';
import { SlideModel } from './slide.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { rotateCubeToLeft } from 'ngx-router-animations';
import { MatDialog } from '@angular/material/dialog';
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
  slideCount: number;
  constructor(private dialog: MatDialog) {
    this.slideCount = this.slides ? this.slides.length : 0;
  }

  ngOnInit() {}
  onSlidePrev() {
    if (this.slideIndex === 0) {
      return;
    }
    this.slideIndex -= 1;
  }
  onSlideNext() {
    if (this.slideIndex === this.slideCount - 1) {
      this.slideIndex = 0;
      return;
    }
    this.slideIndex += 1;
  }

}
