import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDebitCardsComponent } from './admin-debit-cards.component';
import { AddOrEditDebitCardComponent } from './add-or-edit-debit-card/add-or-edit-debit-card.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { AdminDebitCardsRoutingModule } from './admin-debit-cards.routing';

@NgModule({
  declarations: [
    AdminDebitCardsComponent,
     AddOrEditDebitCardComponent],
  imports: [
    CommonModule,
    SharedAdminModule,
    AdminDebitCardsRoutingModule
  ],
  entryComponents: [
    AddOrEditDebitCardComponent
  ]
})
export class AdminDebitCardsModule { }
