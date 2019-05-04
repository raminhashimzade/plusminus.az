import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanRequestDialogComponent } from './loan-request-dialog.component';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoanRequestStepFirstComponent } from './loan-request-step-first/loan-request-step-first.component';
import { LoanRequestStepSecondComponent } from './loan-request-step-second/loan-request-step-second.component';
import { LoanRequestStepDoneComponent } from './loan-request-step-done/loan-request-step-done.component';
import { LoanRequestErrorComponent } from './loan-request-error/loan-request-error.component';
import { LoanRequestStepThirdComponent } from './loan-request-step-third/loan-request-step-third.component';

@NgModule({
  declarations: [
    LoanRequestDialogComponent,
    LoanRequestStepFirstComponent,
    LoanRequestStepSecondComponent,
    LoanRequestStepThirdComponent,
    LoanRequestStepDoneComponent,
    LoanRequestErrorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    SharedTranslateModule,
    ReactiveFormsModule
  ],
  exports: [LoanRequestDialogComponent],
  entryComponents: [LoanRequestDialogComponent]
})
export class LoanRequestDialogModule { }
