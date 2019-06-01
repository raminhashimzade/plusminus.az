import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAdminComponent } from './bank-admin.component';
import { BankLoginComponent } from './bank-login/bank-login.component';

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: BankLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAdminRoutingModule {}
