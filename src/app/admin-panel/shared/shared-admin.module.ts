import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSearchModule } from './components/select-search/select-search.module';
import { ProgressSpinnerModule } from './components/progress-spinner/progress-spinner.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module';
import { MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectSearchModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    SharedModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    CommonModule,
    SelectSearchModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    SharedModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class SharedAdminModule { }
