import { FlyToCartModule } from './directives/fly-to-cart/fly-to-cart.module';
import { NgModule } from '@angular/core';
import { SharedTranslateModule } from './shared-translate.module';
import { MaterialModule } from '../material.module';
import { RatingModule } from '../home/rating/rating.module';
import { ReadMoreModule } from './directives/read-more/read-more.module';
import { TableLoaderModule } from '../home/table-loader/table-loader.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByColumnModule } from './directives/order-by-column/order-by-column.module';
import { DocumentDialogModule } from './components/document-dialog/document-dialog.module';
import { PopoverModule } from '../popover/popover.module';
import { ConfirmDialogModule } from '../admin-panel/shared/components/confirm-dialog/confirm-dialog.module';
import { SWIPER_CONFIG, SwiperConfigInterface, SwiperModule } from 'ngx-swiper-wrapper';
import { UploadInputModule } from './components/upload-input/upload-input.module';
import { ButtonToggleModule } from './components/button-toggle/button-toggle.module';
import { ButtonToggleGroupModule } from './components/button-toggle-group/button-toggle-group.module';
import { ImgSrcPipeModule } from './pipes/img-src-pipe.module';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
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
    OrderByColumnModule,
    DocumentDialogModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule,
    ConfirmDialogModule,
    SwiperModule,
    UploadInputModule,
    ButtonToggleModule,
    ImgSrcPipeModule,
    ButtonToggleGroupModule
  ],
  exports: [
    SharedTranslateModule,
    FormsModule,
    MaterialModule,
    RatingModule,
    ReadMoreModule,
    FlyToCartModule,
    TableLoaderModule,
    OrderByColumnModule,
    DocumentDialogModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule,
    ConfirmDialogModule,
    SwiperModule,
    UploadInputModule,
    ButtonToggleModule,
    ImgSrcPipeModule,
    ButtonToggleGroupModule
  ],
  entryComponents: [],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class SharedModule { }