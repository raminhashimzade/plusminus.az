import { Component, OnInit, forwardRef, SimpleChanges, Input} from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadFileDialogComponent } from '../upload-file-dialog/upload-file-dialog.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AdminPanelService } from 'src/app/admin-panel/admin-panel.service';

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
  imgId: string;
  disabled = false;
  loaded: boolean;
  constructor(private dialog: MatDialog, private adminPanelService: AdminPanelService ) { }

  ngOnInit() {
  }
  onLoaded() {
   this.loaded = true;
  }
  onUpload() {
    const dialogRef = this.dialog.open(UploadFileDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) { return; }
      this.imgId = res;
      console.log(this.imgId);
      this.onChange(this.imgId);
      dialogRef.close();
    });
  }
  onRemoveFile(id: string) {
    // this.adminPanelService
    //   .removeFile(id)
    //   .subscribe(res => {
    //     this.imgId = undefined;
    //     this.onChange(undefined);
    //   });
  }
  get value(): string {
    return this.imgId;
  }
  writeValue(value: string): void {
    if (+value) {
      console.log(value)
      this.imgId = value;
    }

  }
  onChange(value: string) {
    this.imgId =  value;
    console.log(value);
  }
  onTouched = () => {};
  ngOnChanges(changes: SimpleChanges) {

  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
    console.log('register On cChanged')
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
