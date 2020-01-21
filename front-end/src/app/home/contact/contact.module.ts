import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { MaterialModule } from 'src/app/material.module';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { FormsModule } from '@angular/forms';
import { OtpVerifyModule } from 'src/app/shared/components/otp-verify/otp-verify.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
    FormsModule,
    SharedTranslateModule,
    OtpVerifyModule
  ]
})
export class ContactModule { }
