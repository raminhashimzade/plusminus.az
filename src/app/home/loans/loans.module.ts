import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './loans.component';
import { LoansRoutingModule } from './loans.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoansTableComponent } from './loans-table/loans-table.component';
import {  ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from '@angular/forms';
import { LoanRequestDialogModule } from './loan-request-dialog/loan-request-dialog.module';
import { LoansCompareComponent } from './loans-compare/loans-compare.component';
import { LoansFilterComponent } from './loans-filter/loans-filter.component';
import { LoansCardsComponent } from './loans-table/loans-cards/loans-cards.component';
import { EndLoanOrderComponent } from './end-loan-order/end-loan-order.component';
import { BankCheckboxLoaderComponent } from './end-loan-order/bank-checkbox-loader/bank-checkbox-loader.component';
@NgModule({
  declarations: [
    LoansComponent,
     LoansTableComponent,
      LoansCompareComponent,
      LoansFilterComponent,
      LoansCardsComponent,
      EndLoanOrderComponent,
      BankCheckboxLoaderComponent,
    ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    SharedModule,
    LoanRequestDialogModule
  ],
  entryComponents: [
  ]

})
export class LoansModule { }
