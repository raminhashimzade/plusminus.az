import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRatesComponent } from './exchange-rates.component';
import { ExchangeRatesRoutingModule } from './exchange-rates.routing';
import { FavorableRatesPreviewTableModule } from '../landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { MaterialModule } from 'src/app/material.module';
import { ImgSrcPipeModule } from 'src/app/shared/pipes/img-src-pipe.module';

@NgModule({
  declarations: [ExchangeRatesComponent],
  imports: [
    CommonModule,
    SharedTranslateModule,
    MaterialModule,
    ImgSrcPipeModule,
    ExchangeRatesRoutingModule,
    FavorableRatesPreviewTableModule
  ]
})
export class ExchangeRatesModule { }
