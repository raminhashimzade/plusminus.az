import { NgModule } from '@angular/core';
import { SharedTranslateModule } from './shared-translate.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [],
  imports: [
    SharedTranslateModule,
    MaterialModule
  ],
  exports: [
    SharedTranslateModule,
    MaterialModule
  ]
})
export class SharedModule { }
