import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCustomersComponent } from './bank-customers.component';

describe('BankCustomersComponent', () => {
  let component: BankCustomersComponent;
  let fixture: ComponentFixture<BankCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
