import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TokenResolver } from './home/token.resolver';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnsupportedBrowserComponent } from './unsupported-browser/unsupported-browser.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    resolve:  {token: TokenResolver},
    children: [
      {
        path: '',
        loadChildren:
          './home/landing-page/landing-page.module#LandingPageModule'
      },
      {
        path: 'loans',
        loadChildren:
          './home/loans/loans.module#LoansModule'
      },
      {
        path: 'deposits',
        loadChildren:
          './home/deposits/deposits.module#DepositsModule'
      },
      {
        path: 'exchange-rates',
        loadChildren:
          './home/exchange-rates/exchange-rates.module#ExchangeRatesModule'
      },
      {
        path: 'mortgage',
        loadChildren:
          './home/mortgage/mortgage.module#MortgageModule'
      },
      {
        path: 'credit-cards',
        loadChildren:
          './home/credit-cards/credit-cards.module#CreditCardsModule'
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
    {useHash: true, preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
