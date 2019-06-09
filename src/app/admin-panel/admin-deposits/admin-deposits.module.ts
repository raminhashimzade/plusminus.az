import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDepositsComponent } from './admin-deposits.component';
import { AdminDepositsRoutingModule } from './admin-deposits.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminDepositsComponent],
  imports: [
    CommonModule,
    AdminDepositsRoutingModule,
    SharedModule,
  ]
})
export class AdminDepositsModule { }
