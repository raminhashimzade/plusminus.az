import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bank-admin-change-password',
  templateUrl: './bank-admin-change-password.component.html',
  styleUrls: ['./bank-admin-change-password.component.scss']
})
export class BankAdminChangePasswordComponent implements OnInit {
  hideOldPassword = true;
  hideNewPassword = true;
  isLoading: boolean;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {

  }
}
