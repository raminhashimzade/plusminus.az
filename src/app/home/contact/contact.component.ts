import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  inputPrefix = '50';
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.form.controls['gsm'].hasError('required') ?
    `${this.translateService.instant('~pleaseFillTelNumber')}` : ''
  }
  onTelInput(e: any) {
    const value = e.target.value;
    this.form.controls['gsm'].setValue(value.replace(/[^\d]/,''))
  }

}
