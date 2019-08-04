import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoansCompareComponent } from './loans-compare/loans-compare.component';
import { LoansTableComponent } from './loans-table/loans-table.component';
import { EndLoanOrderComponent } from './end-loan-order/end-loan-order.component';
import {LoanRequestWrapperComponent} from './loan-request-wrapper/loan-request-wrapper.component'
const routes: Routes = [
  { path: '', component: LoansTableComponent,  children: [
      {path: 'loan-request', component: LoanRequestWrapperComponent}
  ] },
  {path: 'compare', component: LoansCompareComponent},
  {path: 'complete-order', component: EndLoanOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule {}
