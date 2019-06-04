import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { ContactService } from './contact.service';
import { finalize } from 'rxjs/operators';
import { SharedService } from 'src/app/shared/shared.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { OtpVerifyComponent } from 'src/app/shared/components/otp-verify/otp-verify.component';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  inputPrefix = '50';
  loading: boolean;
  isSent: boolean;
  constructor(
    private translateService: TranslateService,
    private titleService: Title,
    private contactService: ContactService,
    private sharedService: SharedService,
    private dialog: MatDialog
    ) {
      this.titleService.setTitle(this.translateService.instant('~contacts'));
    }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.form.controls['cusMobilePhone'].hasError('required') ?
    `${this.translateService.instant('~pleaseFillTelNumber')}` : ''
  }
  onTelInput(e: any) {
    const value = e.target.value;
    this.form.controls['cusMobilePhone'].setValue(value.replace(/[^\d]/,''))
  }
  onSubmit() {
    const gsm = `994${this.inputPrefix}${this.form.controls['cusMobilePhone'].value}`;
    if (!this.form.valid) {return;}
   const dialogRef = this.openOtpVerifyDialog(gsm);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.postCustomerMessage();
      }
    })
  }
  postCustomerMessage() {
    const gsm = `994${this.inputPrefix}${this.form.controls['cusMobilePhone'].value}`;
    const newFormValue = {
      cusMobilePhone: gsm,
      messageSubject:  this.form.value.messageSubject,
      messageBody: this.form.value.messageBody
    }
    if (!this.form.valid) {return;}
    this.loading = true;
    this.contactService.postCustomerMessage(newFormValue)
    .pipe(
      finalize(() => this.loading = false)
    ).subscribe(res => {
      this.isSent = true;
      this.sharedService.createNotification(this.translateService.instant('~messageSent'), 'OK', 'success');
    });
  }

  openOtpVerifyDialog(gsm: string): MatDialogRef<OtpVerifyComponent> {
    const dialogRef =  this.dialog.open(OtpVerifyComponent, {
        data: {
          otpObject: {
            gsm: gsm
          }
        }
      });
    return dialogRef;
  }

}
