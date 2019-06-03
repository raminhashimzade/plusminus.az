import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactPopupComponent } from './customer-contact-popup.component';

describe('CustomerContactPopupComponent', () => {
  let component: CustomerContactPopupComponent;
  let fixture: ComponentFixture<CustomerContactPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerContactPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerContactPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
