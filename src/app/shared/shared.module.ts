import { FlyToCartModule } from './directives/fly-to-cart/fly-to-cart.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { SharedTranslateModule } from './shared-translate.module';
import { MaterialModule } from '../material.module';
import { RatingModule } from '../home/rating/rating.module';
import { ReadMoreModule } from './directives/read-more/read-more.module';

@NgModule({
  declarations: [],
  imports: [
    SharedTranslateModule,
    MaterialModule,
    PerfectScrollbarModule,
    RatingModule,
    ReadMoreModule,
    FlyToCartModule
  ],
  exports: [
    SharedTranslateModule,
    MaterialModule,
    PerfectScrollbarModule,
    RatingModule,
    ReadMoreModule,
    FlyToCartModule
  ]
})
export class SharedModule { }
