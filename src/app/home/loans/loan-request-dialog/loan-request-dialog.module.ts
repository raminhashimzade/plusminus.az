import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanRequestDialogComponent } from './loan-request-dialog.component';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoanRequestDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    SharedTranslateModule,
    ReactiveFormsModule
  ],
  exports: [LoanRequestDialogComponent],
  entryComponents: [LoanRequestDialogComponent]
})
export class LoanRequestDialogModule { }
