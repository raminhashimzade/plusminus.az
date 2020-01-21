import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MortgageTableComponent } from './mortgage-table/mortgage-table.component';

const routes: Routes = [
  { path: '', component: MortgageTableComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MortgageRoutingModule {}
