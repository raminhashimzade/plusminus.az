
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDebitCardsComponent } from './admin-debit-cards.component';

const routes: Routes = [
  { path: '', component: AdminDebitCardsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDebitCardsRoutingModule {}