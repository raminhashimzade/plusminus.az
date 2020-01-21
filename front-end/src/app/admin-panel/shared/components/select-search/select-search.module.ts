import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SelectSearchComponent } from './select-search.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SelectSearchLoaderComponent } from './select-search-loader/select-search-loader.component';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { FieldErrorModule } from '../../directives/field-error/field-error.module';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
@NgModule({
  declarations: [SelectSearchComponent, SelectSearchLoaderComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    SharedTranslateModule,
    FieldErrorModule
  ],
  exports: [SelectSearchComponent]
})
export class SelectSearchModule {

}
