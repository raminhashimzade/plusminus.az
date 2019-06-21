import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardsTableComponent } from './credit-cards-table/credit-cards-table.component';
import { CredtCardCompareComponent } from './credt-card-compare/credt-card-compare.component';
const routes: Routes = [
  { path: '', component: CreditCardsTableComponent, pathMatch: 'full' },
  {path: 'compare', component: CredtCardCompareComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardsRoutingModule {}
