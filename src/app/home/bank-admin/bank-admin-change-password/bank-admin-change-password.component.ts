import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BankAdminService } from '../bank-admin.service';
import { finalize } from 'rxjs/operators';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { BankAdminUser } from '../models/bank-admin.user.model';

@Component({
  selector: 'bank-admin-change-password',
  templateUrl: './bank-admin-change-password.component.html',
  styleUrls: ['./bank-admin-change-password.component.scss']
})
export class BankAdminChangePasswordComponent implements OnInit {
  @ViewChild('f', {static: false}) form: NgForm;
  hideOldPassword = true;
  hideNewPassword = true;
  confirmNewPassword = true;
  loading: boolean;
  user: BankAdminUser;
  constructor(
    private translateService: TranslateService,
    private sharedService: SharedService,
     private bankAdminService: BankAdminService,
     private router: Router
     ) { }

  ngOnInit() {
    this.user = this.bankAdminService.getUser();
  }
  onSubmit() {
    if (!this.form.valid) {return;}
    if (this.form.controls['confirmNewPassword'].value !== this.form.controls['newPassword'].value) {return;}
    this.loading = true;
    this.bankAdminService.changePassword(this.form.value)
    .pipe(
      finalize(() => this.loading = false)
    )
    .subscribe(res => {
      if (!!res.success) {
        this.sharedService.createNotification('~passwordChangeSuccess', 'OK', 'success');
        this.bankAdminService.logout();
      }
    })
  }
  getErrorMessage(control: string) {
    if (!this.form) {return;}
    if (control === 'confirmNewPassword') {
      if (this.form.touched && (this.form.controls['confirmNewPassword'].value !== this.form.controls['newPassword'].value)) {
        return this.translateService.instant('~newPasswordIsNotMatched');
      }
    }
  }
}
