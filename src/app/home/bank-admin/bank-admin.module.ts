import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAdminComponent } from './bank-admin.component';
import { BankAdminRoutingModule } from './bank-admin.routing';
import { BankLoginComponent } from './bank-login/bank-login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankCustomersComponent } from './bank-customers/bank-customers.component';
import { BankAdminGuard } from './bank-admin.guard';

@NgModule({
  declarations: [BankAdminComponent, BankLoginComponent, BankCustomersComponent],
  imports: [
    CommonModule,
    BankAdminRoutingModule,
    SharedModule
  ],
  providers: [BankAdminGuard]
})
export class BankAdminModule { }
