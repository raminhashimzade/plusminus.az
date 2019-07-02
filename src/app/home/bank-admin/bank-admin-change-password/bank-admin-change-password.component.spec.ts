import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdminChangePasswordComponent } from './bank-admin-change-password.component';

describe('BankAdminChangePasswordComponent', () => {
  let component: BankAdminChangePasswordComponent;
  let fixture: ComponentFixture<BankAdminChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAdminChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAdminChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
