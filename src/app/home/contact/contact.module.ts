import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { MaterialModule } from 'src/app/material.module';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
    SharedTranslateModule
  ]
})
export class ContactModule { }
