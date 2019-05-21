import { FlyToCartModule } from './directives/fly-to-cart/fly-to-cart.module';
import { NgModule } from '@angular/core';
import { SharedTranslateModule } from './shared-translate.module';
import { MaterialModule } from '../material.module';
import { RatingModule } from '../home/rating/rating.module';
import { ReadMoreModule } from './directives/read-more/read-more.module';
import { TableLoaderModule } from '../home/table-loader/table-loader.module';
import { CountUpModule } from 'countup.js-angular2';
import { FormsModule } from '@angular/forms';
import { OrderByColumnModule } from './directives/order-by-column/order-by-column.module';

@NgModule({
  declarations: [],
  imports: [
    SharedTranslateModule,
    FormsModule,
    MaterialModule,
    RatingModule,
    ReadMoreModule,
    FlyToCartModule,
    TableLoaderModule,
    CountUpModule,
    OrderByColumnModule
  ],
  exports: [
    SharedTranslateModule,
    FormsModule,
    MaterialModule,
    RatingModule,
    ReadMoreModule,
    FlyToCartModule,
    TableLoaderModule,
    CountUpModule,
    OrderByColumnModule
  ]
})
export class SharedModule { }
