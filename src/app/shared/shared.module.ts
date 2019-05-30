import { FlyToCartModule } from './directives/fly-to-cart/fly-to-cart.module';
import { NgModule } from '@angular/core';
import { SharedTranslateModule } from './shared-translate.module';
import { MaterialModule } from '../material.module';
import { RatingModule } from '../home/rating/rating.module';
import { ReadMoreModule } from './directives/read-more/read-more.module';
import { TableLoaderModule } from '../home/table-loader/table-loader.module';
import { CountUpModule } from 'countup.js-angular2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByColumnModule } from './directives/order-by-column/order-by-column.module';
import { DocumentDialogModule } from './components/document-dialog/document-dialog.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedTranslateModule,
    FormsModule,
    MaterialModule,
    RatingModule,
    ReadMoreModule,
    FlyToCartModule,
    TableLoaderModule,
    CountUpModule,
    OrderByColumnModule,
    DocumentDialogModule,
    FormsModule,
    ReactiveFormsModule
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
    OrderByColumnModule,
    DocumentDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: []
})
export class SharedModule { }
