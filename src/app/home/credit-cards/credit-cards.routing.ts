import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardsTableComponent } from './credit-cards-table/credit-cards-table.component';
const routes: Routes = [
  { path: '', component: CreditCardsTableComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardsRoutingModule {}
