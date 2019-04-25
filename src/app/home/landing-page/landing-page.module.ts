import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    SharedTranslateModule,
    MaterialModule
  ]
})
export class LandingPageModule { }
