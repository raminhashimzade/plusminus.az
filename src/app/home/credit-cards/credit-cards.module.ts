import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardsComponent } from './credit-cards.component';
import { CreditCardsRoutingModule } from './credit-cards.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreditCardsTableComponent } from './credit-cards-table/credit-cards-table.component';
import { CreditCardsFilterComponent } from './credit-cards-filter/credit-cards-filter.component';

@NgModule({
  declarations: [CreditCardsComponent, CreditCardsTableComponent, CreditCardsFilterComponent],
  imports: [
    CommonModule,
    CreditCardsRoutingModule,
    SharedModule
  ]
})
export class CreditCardsModule { }
