import { AdminDepositService } from './admin-deposit.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDepositsComponent } from './admin-deposits.component';
import { AdminDepositsRoutingModule } from './admin-deposits.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { AddOrEditDepositComponent } from './add-or-edit-deposit/add-or-edit-deposit.component';

@NgModule({
  declarations: [AdminDepositsComponent, AddOrEditDepositComponent],
  imports: [
    CommonModule,
    AdminDepositsRoutingModule,
    SharedAdminModule,
  ],
  providers: [AdminDepositService],
  entryComponents: [AddOrEditDepositComponent]
})
export class AdminDepositsModule { }
