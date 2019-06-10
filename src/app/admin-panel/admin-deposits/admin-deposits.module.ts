import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDepositsComponent } from './admin-deposits.component';
import { AdminDepositsRoutingModule } from './admin-deposits.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';

@NgModule({
  declarations: [AdminDepositsComponent],
  imports: [
    CommonModule,
    AdminDepositsRoutingModule,
    SharedAdminModule
  ]
})
export class AdminDepositsModule { }
