import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { UploadFileDialogComponent } from './upload-file-dialog.component';

@NgModule({
  declarations: [UploadFileDialogComponent],
  imports: [
    CommonModule,
    FilePickerModule,
  ],
  exports: [UploadFileDialogComponent],
  entryComponents:[UploadFileDialogComponent]
})
export class UploadFileDialogModule { }
