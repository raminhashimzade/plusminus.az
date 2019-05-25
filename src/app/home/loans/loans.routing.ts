import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoansCompareComponent } from './loans-compare/loans-compare.component';
import { LoansTableComponent } from './loans-table/loans-table.component';

const routes: Routes = [
  { path: '', component: LoansTableComponent, pathMatch: 'full' },
  {path: 'compare', component: LoansCompareComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule {}
