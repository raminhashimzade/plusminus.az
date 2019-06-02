import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { ContactService } from './contact.service';
import { finalize } from 'rxjs/operators';
import { SharedService } from 'src/app/shared/shared.service';

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
    if (!this.form.valid) {return;}
    this.loading = true;
    console.log(this.form.value);
    this.contactService.postCustomerMessage(this.form.value)
    .pipe(
      finalize(() => this.loading = false)
    ).subscribe(res => {
      this.isSent = true;
      this.sharedService.createNotification(this.translateService.instant('~messageSent'), 'OK', 'success');
    });
  }

}
