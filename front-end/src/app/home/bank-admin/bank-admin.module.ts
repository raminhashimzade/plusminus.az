import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAdminComponent } from './bank-admin.component';
import { BankAdminRoutingModule } from './bank-admin.routing';
import { BankLoginComponent } from './bank-login/bank-login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankCustomersComponent } from './bank-customers/bank-customers.component';
import { BankAdminGuard } from './bank-admin.guard';
import { CustomerContactPopupComponent } from './bank-customers/customer-contact-popup/customer-contact-popup.component';
import { PopoverModule } from 'src/app/popover/popover.module';
import { CustomerNotePopupComponent } from './bank-customers/customer-note-popup/customer-note-popup.component';
import { BankAdminChangePasswordComponent } from './bank-admin-change-password/bank-admin-change-password.component';

@NgModule({
  declarations: [
    BankAdminComponent,
    BankLoginComponent,
    BankCustomersComponent,
    CustomerContactPopupComponent,
    CustomerNotePopupComponent,
    BankAdminChangePasswordComponent
  ],
  imports: [
    CommonModule,
    BankAdminRoutingModule,
    SharedModule,
    PopoverModule
  ],
  providers: [BankAdminGuard],
  entryComponents: [CustomerContactPopupComponent, CustomerNotePopupComponent]
})
export class BankAdminModule { }
