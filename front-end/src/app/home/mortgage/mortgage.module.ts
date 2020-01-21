import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageComponent } from './mortgage.component';
import { MortgageTableComponent } from './mortgage-table/mortgage-table.component';
import { MortgageFilterComponent } from './mortgage-filter/mortgage-filter.component';
import { MortgageCardsComponent } from './mortgage-table/mortgage-cards/mortgage-cards.component';
import { MortgageRoutingModule } from './mortgage.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MortgageComponent,
    MortgageTableComponent,
    MortgageFilterComponent,
    MortgageCardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MortgageRoutingModule
  ]
})
export class MortgageModule { }
