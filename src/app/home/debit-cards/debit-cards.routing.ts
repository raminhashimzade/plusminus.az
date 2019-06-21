import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebitCardsTableComponent } from './debit-cards-table/debit-cards-table.component';
import { DebitCardCompareComponent } from './debit-card-compare/debit-card-compare.component';
const routes: Routes = [
  { path: '', component: DebitCardsTableComponent, pathMatch: 'full' },
  {path: 'compare', component: DebitCardCompareComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebitCardsRoutingModule {}
