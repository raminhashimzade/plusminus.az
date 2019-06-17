import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCreditCardsComponent } from './admin-credit-cards.component';
import { AdminCreditCardsRoutingModule } from './admin-credit-cards.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { AddOrEditCreditCardComponent } from './add-or-edit-credit-card/add-or-edit-credit-card.component';

@NgModule({
  declarations: [AdminCreditCardsComponent, AddOrEditCreditCardComponent],
  imports: [
    CommonModule,
    SharedAdminModule,
    AdminCreditCardsRoutingModule
  ],
  entryComponents: [AddOrEditCreditCardComponent]
})
export class AdminCreditCardsModule { }
