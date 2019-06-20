import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebitCardsTableComponent } from './debit-cards-table/debit-cards-table.component';
const routes: Routes = [
  { path: '', component: DebitCardsTableComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebitCardsRoutingModule {}
