import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdminSettingsDropdownComponent } from './bank-admin-settings-dropdown.component';

describe('BankAdminSettingsDropdownComponent', () => {
  let component: BankAdminSettingsDropdownComponent;
  let fixture: ComponentFixture<BankAdminSettingsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAdminSettingsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAdminSettingsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
