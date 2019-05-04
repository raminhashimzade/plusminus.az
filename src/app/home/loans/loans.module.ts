import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './loans.component';
import { LoansRoutingModule } from './loans.routing';
import { LoansBannerComponent } from './loans-banner/loans-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoansTableComponent } from './loans-table/loans-table.component';
import {  ReactiveFormsModule} from "@angular/forms";
import { LoanRequestDialogModule } from './loan-request-dialog/loan-request-dialog.module';
@NgModule({
  declarations: [LoansComponent, LoansBannerComponent, LoansTableComponent],
  imports: [
    CommonModule,
    LoansRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    LoanRequestDialogModule
  ],
  entryComponents: [
  ]

})
export class LoansModule { }
