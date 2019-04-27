import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { SlideComponent } from './main-banner/slide/slide.component';
import { LandingPageRoutingModule } from './landing-page.routing';
import { OurServicesComponent } from './our-services/our-services.component';
import { ServiceCardComponent } from './our-services/service-card/service-card.component';
import { BestOffersComponent } from './best-offers/best-offers.component';
import { BestDepositOffersComponent } from './best-offers/best-deposit-offers/best-deposit-offers.component';
import { BestDepositOfferComponent } from './best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component';
import { BestCreditOffersComponent } from './best-offers/best-credit-offers/best-credit-offers.component';
import { CreditOfferCardComponent } from './best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component';

@NgModule({
  declarations: [
    LandingPageComponent,
     MainBannerComponent,
      SlideComponent,
       OurServicesComponent,
        ServiceCardComponent,
        BestOffersComponent,
         BestDepositOffersComponent,
          BestDepositOfferComponent,
          BestCreditOffersComponent,
          CreditOfferCardComponent],
  imports: [
    CommonModule,
    SharedTranslateModule,
    MaterialModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule {}
