import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    SharedTranslateModule
  ],
  exports: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class ConfirmDialogModule { }
