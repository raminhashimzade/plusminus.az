import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { SharedTranslateModule } from './shared-translate.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [],
  imports: [
    SharedTranslateModule,
    MaterialModule,
    PerfectScrollbarModule
  ],
  exports: [
    SharedTranslateModule,
    MaterialModule,
    PerfectScrollbarModule
  ]
})
export class SharedModule { }
