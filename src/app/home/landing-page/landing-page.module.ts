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

@NgModule({
  declarations: [LandingPageComponent, MainBannerComponent, SlideComponent, OurServicesComponent, ServiceCardComponent],
  imports: [
    CommonModule,
    SharedTranslateModule,
    MaterialModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule {}
