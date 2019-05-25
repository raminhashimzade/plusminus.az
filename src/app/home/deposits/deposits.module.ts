import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositsComponent } from './deposits.component';
import { DepostisRoutingModule } from './deposits.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepositsCalcContainerComponent } from './deposits-calc-container/deposits-calc-container.component';
import { DepositsTableComponent } from './deposits-table/deposits-table.component';
import { DepositsCardsComponent } from './deposits-table/deposits-cards/deposits-cards.component';
import { DepositsFilterComponent } from './deposits-filter/deposits-filter.component';
import { DepositsCompareComponent } from './deposits-compare/deposits-compare.component';

@NgModule({
  declarations: [
    DepositsComponent,
     DepositsCalcContainerComponent,
     DepositsTableComponent,
      DepositsCardsComponent,
      DepositsFilterComponent,
      DepositsCompareComponent
    ],
  imports: [
    CommonModule,
    DepostisRoutingModule,
    SharedModule
  ]
})
export class DepositsModule { }
