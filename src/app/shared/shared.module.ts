import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { SharedTranslateModule } from './shared-translate.module';
import { MaterialModule } from '../material.module';
import { RatingModule } from '../home/rating/rating.module';

@NgModule({
  declarations: [],
  imports: [
    SharedTranslateModule,
    MaterialModule,
    PerfectScrollbarModule,
    RatingModule
  ],
  exports: [
    SharedTranslateModule,
    MaterialModule,
    PerfectScrollbarModule,
    RatingModule
  ]
})
export class SharedModule { }
