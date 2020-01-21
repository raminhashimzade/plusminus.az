import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestCustomerDetailsComponent } from './request-customer-details.component';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { RequestCustomerDetailsRoutingModule } from './request-customer-details.routing';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RequestCustomerDetailsComponent],
  imports: [
CommonModule,
    RequestCustomerDetailsRoutingModule,
    SharedTranslateModule,
    RouterModule,
    MatButtonModule
  ]
})
export class RequestCustomerDetailsModule { }
