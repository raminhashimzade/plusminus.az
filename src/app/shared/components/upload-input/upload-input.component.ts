import { Component, OnInit, forwardRef, SimpleChanges, Input} from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadFileDialogComponent } from '../upload-file-dialog/upload-file-dialog.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AdminPanelService } from 'src/app/admin-panel/admin-panel.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'upload-input',
  templateUrl: './upload-input.component.html',
  styleUrls: ['./upload-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadInputComponent),
      multi: true
    }
  ]
})
export class UploadInputComponent implements OnInit {
  @Input() defaultImgUrl: string;
  @Input() fileExtensions: string[];
  @Input() config: Object;
  imgId: string;
  disabled = false;
  loaded: boolean = true;
  constructor(private dialog: MatDialog, private adminPanelService: AdminPanelService ) { }

  ngOnInit() {
  }
  onLoaded(e) {
    console.log('loaded')
   this.loaded = true;
  }
  onErrorLoad(e) {
    console.log(e);
  }
  onUpload() {
    const dialogRef = this.dialog.open(UploadFileDialogComponent, {
      data: {
        ...this.config
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (!res) { return; }
      this.imgId = res;
      console.log(this.imgId);
      this.onChange(this.imgId);
      dialogRef.close();
    });
  }
  onRemoveFile(id: number) {
    this.imgId = undefined;
    this.adminPanelService
      .removeFile(id)
      .subscribe(res => {
        this.imgId = undefined;
        this.onChange(undefined);
      });
  }
  get value(): string {
    return this.imgId;
  }
  writeValue(value: string): void {
    if (+value) {
      this.imgId = value;
    }

  }
  onChange(value: string) {
    this.imgId =  value;
  }
  onTouched = () => {};
  ngOnChanges(changes: SimpleChanges) {

  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
    // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


}
