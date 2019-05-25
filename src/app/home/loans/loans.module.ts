import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './loans.component';
import { LoansRoutingModule } from './loans.routing';
import { LoansBannerComponent } from './loans-banner/loans-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoansTableComponent } from './loans-table/loans-table.component';
import {  ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from '@angular/forms';
import { LoanRequestDialogModule } from './loan-request-dialog/loan-request-dialog.module';
import { LoansCompareComponent } from './loans-compare/loans-compare.component';
import { LoansFilterComponent } from './loans-filter/loans-filter.component';
import { LoansCardsComponent } from './loans-table/loans-cards/loans-cards.component';
@NgModule({
  declarations: [
    LoansComponent,
     LoansBannerComponent,
     LoansTableComponent,
      LoansCompareComponent,
      LoansFilterComponent,
      LoansCardsComponent,
    ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    LoanRequestDialogModule
  ],
  entryComponents: [
  ]

})
export class LoansModule { }
