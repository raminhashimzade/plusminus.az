import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankLoginComponent } from './bank-login/bank-login.component';
import { BankCustomersComponent } from './bank-customers/bank-customers.component';

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: BankLoginComponent},
  {path: 'customers', component: BankCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAdminRoutingModule {}
