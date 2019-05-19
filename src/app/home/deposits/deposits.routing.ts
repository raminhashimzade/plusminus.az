import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositsComponent } from './deposits.component';

const routes: Routes = [
  { path: '', component: DepositsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepostisRoutingModule {}
