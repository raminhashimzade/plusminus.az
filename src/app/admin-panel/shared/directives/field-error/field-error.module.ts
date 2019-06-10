import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorDirective } from './field-error.directive';
import { FormsModule } from '@angular/forms';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';

@NgModule({
  declarations: [
    FieldErrorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedTranslateModule
  ],
  exports: [FieldErrorDirective]
})
export class FieldErrorModule { }
