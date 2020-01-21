import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdminComponent } from './bank-admin.component';

describe('BankAdminComponent', () => {
  let component: BankAdminComponent;
  let fixture: ComponentFixture<BankAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
