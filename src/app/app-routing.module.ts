import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TokenResolver } from './home/token.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    resolve:{token: TokenResolver},
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
