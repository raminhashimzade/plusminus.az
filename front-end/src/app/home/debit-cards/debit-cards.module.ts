import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebitCardsComponent } from './debit-cards.component';
import { DebitCardsFilterComponent } from './debit-cards-filter/debit-cards-filter.component';
import { DebitCardsTableComponent } from './debit-cards-table/debit-cards-table.component';
import { DebitCardsRoutingModule } from './debit-cards.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { DebitCardCompareComponent } from './debit-card-compare/debit-card-compare.component';
import { DebitCardLoaderComponent } from './debit-card-loader/debit-card-loader.component';

@NgModule({
  declarations: [
    DebitCardsComponent,
     DebitCardsFilterComponent,
      DebitCardsTableComponent,
      DebitCardCompareComponent,
      DebitCardLoaderComponent
    ],
  imports: [
    CommonModule,
    DebitCardsRoutingModule,
    SharedModule
  ]
})
export class DebitCardsModule { }
