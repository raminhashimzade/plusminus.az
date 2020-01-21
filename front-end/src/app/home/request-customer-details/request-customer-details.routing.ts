import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestCustomerDetailsComponent } from './request-customer-details.component';

const routes: Routes = [
  { path: '', component: RequestCustomerDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestCustomerDetailsRoutingModule {}
