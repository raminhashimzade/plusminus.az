import { AdminPanelService } from 'src/app/admin-panel/admin-panel.service';
import { AuthService } from 'src/app/auth/auth.service';
import { FilePreviewModel } from 'ngx-awesome-uploader';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UnibookFilePickerAdapter } from './unibook-file-picker.adapter';

@Component({
  selector: 'upload-file-dialog',
  templateUrl: './upload-file-dialog.component.html',
  styleUrls: ['./upload-file-dialog.component.scss']
})
export class UploadFileDialogComponent implements OnInit {
  @Output() uploaded = new EventEmitter<string>();
  adapter = new UnibookFilePickerAdapter(this.http, this.authService, this.adminService);
  cropperOptions = {
    dragMode: 'crop',
    autoCrop: true,
    movable: true,
    zoomable: true,
    scalable: true,
    autoCropArea: 0.8,
    aspectRatio: 1.25,
    cropBoxResizable: true
  };
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
               public dialogRef: MatDialogRef<UploadFileDialogComponent>,
               private authService: AuthService,
               private adminService: AdminPanelService,
               private http: HttpClient) {}
  ngOnInit() {
    console.log(this.data.cropperOptions)
    if (this.data && this.data.adapter) {this.adapter = this.data.adapter; }
  }
  onUploaded(res: FilePreviewModel) {
    console.log(res)
   this.dialogRef.close(res.fileId);
  }
  onValidationError(er) {
    console.log(er);
  }

}
