import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadInputComponent } from './upload-input.component';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { UploadFileDialogModule } from '../upload-file-dialog/upload-file-dialog.module';
import { MatDialogModule } from '@angular/material';
import { UploadInputLoaderComponent } from './upload-input-loader/upload-input-loader.component';
import { SharedTranslateModule } from '../../shared-translate.module';
import { ImgSrcPipeModule } from '../../pipes/img-src-pipe.module';

@NgModule({
  declarations: [UploadInputComponent, UploadInputLoaderComponent],
  exports: [UploadInputComponent],
  imports: [
    CommonModule,
    FilePickerModule,
    UploadFileDialogModule,
    MatDialogModule,
    ImgSrcPipeModule,
    SharedTranslateModule
  ],
  entryComponents: []
})
export class UploadInputModule { }
