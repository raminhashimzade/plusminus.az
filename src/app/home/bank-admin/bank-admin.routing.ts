import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankLoginComponent } from './bank-login/bank-login.component';
import { BankCustomersComponent } from './bank-customers/bank-customers.component';
import { BankAdminGuard } from './bank-admin.guard';
import { BankAdminChangePasswordComponent } from './bank-admin-change-password/bank-admin-change-password.component';

const routes: Routes = [
  {path: '',redirectTo: 'customers', pathMatch: 'full'},
  {path: 'login', component: BankLoginComponent},
  {path: 'customers', component: BankCustomersComponent, canActivate: [BankAdminGuard]},
  {path: 'profile-update', component: BankAdminChangePasswordComponent, canActivate: [BankAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAdminRoutingModule {}
