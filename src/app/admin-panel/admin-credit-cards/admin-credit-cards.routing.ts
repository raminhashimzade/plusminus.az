
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCreditCardsComponent } from './admin-credit-cards.component';

const routes: Routes = [
  { path: '', component: AdminCreditCardsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCreditCardsRoutingModule {}