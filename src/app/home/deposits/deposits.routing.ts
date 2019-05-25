import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositsComponent } from './deposits.component';
import { DepositsCompareComponent } from './deposits-compare/deposits-compare.component';

const routes: Routes = [
  { path: '', component: DepositsComponent, pathMatch: 'full' },
  {path: 'compare', component: DepositsCompareComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepostisRoutingModule {}
