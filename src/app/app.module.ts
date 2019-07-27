import { LoanRequestDialogModule } from './home/loans/loan-request-dialog/loan-request-dialog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent} from './home/footer/footer.component';
import {HttpClientModule,  HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import localeRu from '@angular/common/locales/ru';
import localeAz from '@angular/common/locales/az';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeRu);
registerLocaleData(localeAz);
registerLocaleData(localeFr);
export function HttpLoaderFactory(http: HttpClient) {
  const link = './assets/i18n/';
  return new TranslateHttpLoader(http, link, `.json?random=${Math.random() * 100}`);
}
import { TokenResolver } from './home/token.resolver';
import { APIInterceptor } from './shared/interceptors/api.interceptor';

import { ErrorPageComponent } from './error-page/error-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HoverClassModule } from './shared/directives/hover-class/hover-class.module';
import { DepositComparePreviewComponent } from './home/header/compare-preview/deposit-compare-preview/deposit-compare-preview.component';
import { LoanComparePreviewComponent } from './home/header/compare-preview/loan-compare-preview/loan-compare-preview.component';
import { ComparePreviewComponent } from './home/header/compare-preview/compare-preview.component';
import { ValueTranslateModule } from './shared/pipes/value-translate/value-translate.module';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { UnsupportedBrowserComponent } from './unsupported-browser/unsupported-browser.component';
import { SupportedBrowserCardComponent } from './unsupported-browser/supported-browser-card/supported-browser-card.component';
import { DebitCardComparePreviewComponent } from './home/header/compare-preview/debit-card-compare-preview/debit-card-compare-preview.component';
import { CreditCardComparePreviewComponent } from './home/header/compare-preview/credit-card-compare-preview/credit-card-compare-preview.component';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { MatButtonModule, MatMenuModule, MatBadgeModule, MatIconModule} from '@angular/material';
import { AppPreloadingStrategy } from './app-preloading';
import { SentryErrorHandler } from './sentry-error-handler';
import { BankAdminSettingsDropdownComponent } from './home/header/bank-admin-settings-dropdown/bank-admin-settings-dropdown.component';
import { ApplicationCountdownComponent } from './application-countdown/application-countdown.component';
import { ImgSrcPipeModule } from './shared/pipes/img-src-pipe.module';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './custom-router-reuse-strategy';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    NotFoundComponent,
    ComparePreviewComponent,
    LoanComparePreviewComponent,
    DepositComparePreviewComponent,
    CreditCardComparePreviewComponent,
    DebitCardComparePreviewComponent,
    UnsupportedBrowserComponent,
    SupportedBrowserCardComponent,
    BankAdminSettingsDropdownComponent,
    ApplicationCountdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ImgSrcPipeModule,

    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatIconModule,


    FormsModule,
    ValueTranslateModule,
    HoverClassModule,
    LoanRequestDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    TokenResolver,
    AppPreloadingStrategy,
    !environment.testMode ? { provide: ErrorHandler, useClass: SentryErrorHandler } : [],
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
   {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    { provide: LOCALE_ID,
      deps: [TranslateService],
      useFactory: (service) => service.getDefaultLang()
    },
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
