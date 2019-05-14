import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRatesComponent } from './exchange-rates.component';

const routes: Routes = [
  { path: '', component: ExchangeRatesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRatesRoutingModule {}
