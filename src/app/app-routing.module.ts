import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnsupportedBrowserComponent } from './unsupported-browser/unsupported-browser.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren:
        () => import('./home/landing-page/landing-page.module').then(m => m.LandingPageModule)
      },
      {
        path: 'loans',
        loadChildren:
        () => import('./home/loans/loans.module').then(m => m.LoansModule)
      },
      {
        path: 'deposits',
        loadChildren:
        () => import('./home/deposits/deposits.module').then(m => m.DepositsModule)
      },
      {
        path: 'exchange-rates',
        loadChildren:
        () => import('./home/exchange-rates/exchange-rates.module').then(m => m.ExchangeRatesModule)
      },
      {
        path: 'mortgage',
        loadChildren:
        () => import('./home/mortgage/mortgage.module').then(m => m.MortgageModule)
      },
      {
        path: 'credit-cards',
        loadChildren:
        () => import('./home/credit-cards/credit-cards.module').then(m => m.CreditCardsModule)
      },
      {
        path: 'debit-cards',
        loadChildren:
        () => import('./home/debit-cards/debit-cards.module').then(m => m.DebitCardsModule)
      },
      {
        path: 'requestCustomerDetails',
        loadChildren:
        () => import('./home/request-customer-details/request-customer-details.module').then(m => m.RequestCustomerDetailsModule)
      },
      {
        path: 'contact',
        loadChildren:
        () => import('./home/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'bank-admin',
        loadChildren:
        () => import('./home/bank-admin/bank-admin.module').then(m => m.BankAdminModule)
      }
    ]
  },
  {
  path: 'error-page',
  component: ErrorPageComponent
  },
  {
  path: 'unsupported-browser',
  component: UnsupportedBrowserComponent
  },
  {
    path: 'admin',
   loadChildren: './admin-panel/admin-panel.module#AdminPanelModule'
  },
  {
  path: '**',
  component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
