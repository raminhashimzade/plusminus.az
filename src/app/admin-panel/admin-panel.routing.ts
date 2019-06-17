import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelGuard } from './admin-panel.guard';

const routes: Routes = [
    {path: 'login', component: AdminLoginComponent},
  { path: '', component: AdminPanelComponent , children: [
      {path: '', redirectTo: 'loans', pathMatch: 'full'},
      {path: 'deposits', loadChildren:'./admin-deposits/admin-deposits.module#AdminDepositsModule', canActivate: [AdminPanelGuard]},
      {path: 'loans', loadChildren:'./admin-loans/admin-loans.module#AdminLoansModule', canActivate: [AdminPanelGuard]},
      {path: 'credit-cards', loadChildren:'./admin-credit-cards/admin-credit-cards.module#AdminCreditCardsModule', canActivate: [AdminPanelGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {}
