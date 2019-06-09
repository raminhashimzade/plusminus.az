
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDepositsComponent } from './admin-deposits.component';

const routes: Routes = [
  { path: '', component: AdminDepositsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDepositsRoutingModule {}