
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoansComponent } from './admin-loans.component';

const routes: Routes = [
  { path: '', component: AdminLoansComponent, data: {key: "admin/loans"}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLoansRoutingModule {}