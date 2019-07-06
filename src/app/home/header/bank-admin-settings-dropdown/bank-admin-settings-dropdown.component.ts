import { Component, OnInit } from '@angular/core';
import { BankAdminService } from '../../bank-admin/bank-admin.service';

@Component({
  selector: 'bank-admin-settings-dropdown',
  templateUrl: './bank-admin-settings-dropdown.component.html',
  styleUrls: ['./bank-admin-settings-dropdown.component.scss']
})
export class BankAdminSettingsDropdownComponent implements OnInit {

  constructor(private bankAdminService: BankAdminService) { }

  ngOnInit() {
  }
  onLogout() {
    this.bankAdminService.logout();
  }

}
