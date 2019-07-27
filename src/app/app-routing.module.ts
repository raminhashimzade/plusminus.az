import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnsupportedBrowserComponent } from './unsupported-browser/unsupported-browser.component';
import { AppPreloadingStrategy } from './app-preloading';
import { ApplicationCountdownComponent } from './application-countdown/application-countdown.component';
import { getBaseUrl } from './app.utils';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'countdown', component: ApplicationCountdownComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren:
          './home/landing-page/landing-page.module#LandingPageModule',
          data: { preload: true }
      },
      {
        path: 'loans',
        loadChildren:
          './home/loans/loans.module#LoansModule',
          data: { preload: true }
      },
      {
        path: 'deposits',
        loadChildren:
          './home/deposits/deposits.module#DepositsModule',
          data: { preload: true }
      },
      {
        path: 'exchange-rates',
        loadChildren:
          './home/exchange-rates/exchange-rates.module#ExchangeRatesModule',
          data: { preload: true }
      },
      {
        path: 'mortgage',
        loadChildren:
          './home/mortgage/mortgage.module#MortgageModule',
          data: { preload: true }
      },
      {
        path: 'credit-cards',
        loadChildren:
          './home/credit-cards/credit-cards.module#CreditCardsModule',
          data: { preload: true }
      },
      {
        path: 'debit-cards',
        loadChildren:
          './home/debit-cards/debit-cards.module#DebitCardsModule',
          data: { preload: true }
      },
      {
        path: 'requestCustomerDetails',
        loadChildren: './home/request-customer-details/request-customer-details.module#RequestCustomerDetailsModule'
      },
      {
        path: 'contact',
        loadChildren: './home/contact/contact.module#ContactModule'
      },
      {
        path: 'bank-admin',
        loadChildren: './home/bank-admin/bank-admin.module#BankAdminModule'
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
    {useHash: false, preloadingStrategy: AppPreloadingStrategy, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}