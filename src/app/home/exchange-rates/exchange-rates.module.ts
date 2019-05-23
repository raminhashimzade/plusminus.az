import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRatesComponent } from './exchange-rates.component';
import { ExchangeRatesRoutingModule } from './exchange-rates.routing';
import { FavorableRatesPreviewTableModule } from '../landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.module';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { MaterialModule } from 'src/app/material.module';
import { ImgSrcPipeModule } from 'src/app/shared/pipes/img-src-pipe.module';
import { TableLoaderModule } from '../table-loader/table-loader.module';
import { ExchangeRateVisualizeComponent } from './exchange-rate-visualize/exchange-rate-visualize.component';
import { FormsModule } from '@angular/forms';
import { ExchangeRateCalculatorComponent } from './exchange-rate-calculator/exchange-rate-calculator.component';


@NgModule({
  declarations: [ExchangeRatesComponent, ExchangeRateVisualizeComponent, ExchangeRateCalculatorComponent],
  imports: [
    CommonModule,
    SharedTranslateModule,
    MaterialModule,
    ImgSrcPipeModule,
    ExchangeRatesRoutingModule,
    TableLoaderModule,
    FavorableRatesPreviewTableModule,
    FormsModule
  ]
})
export class ExchangeRatesModule { }
