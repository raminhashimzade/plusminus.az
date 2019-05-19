import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositsComponent } from './deposits.component';
import { DepostisRoutingModule } from './deposits.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepositsCalcContainerComponent } from './deposits-calc-container/deposits-calc-container.component';
import { DepositsTableComponent } from './deposits-table/deposits-table.component';

@NgModule({
  declarations: [DepositsComponent, DepositsCalcContainerComponent, DepositsTableComponent],
  imports: [
    CommonModule,
    DepostisRoutingModule,
    SharedModule
  ]
})
export class DepositsModule { }
