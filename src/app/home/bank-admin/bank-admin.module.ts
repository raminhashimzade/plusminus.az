import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAdminComponent } from './bank-admin.component';
import { BankAdminRoutingModule } from './bank-admin.routing';
import { BankLoginComponent } from './bank-login/bank-login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BankAdminComponent, BankLoginComponent],
  imports: [
    CommonModule,
    BankAdminRoutingModule,
    SharedModule
  ]
})
export class BankAdminModule { }
