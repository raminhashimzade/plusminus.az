import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoansComponent } from './admin-loans.component';
import { AdminLoansRoutingModule } from './admin-loans.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [AdminLoansComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminLoansRoutingModule,
    MatTableModule
  ]
})
export class AdminLoansModule { }
