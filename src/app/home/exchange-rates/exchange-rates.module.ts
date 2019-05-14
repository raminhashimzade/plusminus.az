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
// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { FormsModule } from '@angular/forms';

// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme)
@NgModule({
  declarations: [ExchangeRatesComponent, ExchangeRateVisualizeComponent],
  imports: [
    CommonModule,
    SharedTranslateModule,
    MaterialModule,
    ImgSrcPipeModule,
    ExchangeRatesRoutingModule,
    TableLoaderModule,
    FavorableRatesPreviewTableModule,
    FusionChartsModule,
    FormsModule
  ]
})
export class ExchangeRatesModule { }
