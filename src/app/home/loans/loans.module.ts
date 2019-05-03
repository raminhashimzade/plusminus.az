import { LoanRequestDialogComponent } from './loans-table/loan-request-dialog/loan-request-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './loans.component';
import { LoansRoutingModule } from './loans.routing';
import { LoansBannerComponent } from './loans-banner/loans-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoansTableComponent } from './loans-table/loans-table.component';
import {  ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [LoansComponent, LoansBannerComponent, LoansTableComponent, LoanRequestDialogComponent],
  imports: [
    CommonModule,
    LoansRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    LoanRequestDialogComponent
  ]

})
export class LoansModule { }
