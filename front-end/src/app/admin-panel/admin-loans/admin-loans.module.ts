import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoansComponent } from './admin-loans.component';
import { AdminLoansRoutingModule } from './admin-loans.routing';
import { AddOrEditLoanComponent } from './add-or-edit-loan/add-or-edit-loan.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { AdminLoanService } from './admin-loan.service';

@NgModule({
  declarations: [AdminLoansComponent, AddOrEditLoanComponent],
  imports: [
    CommonModule,
    SharedAdminModule,
    AdminLoansRoutingModule,
  ],
  entryComponents: [AddOrEditLoanComponent],
  providers: [AdminLoanService]
})
export class AdminLoansModule { }
