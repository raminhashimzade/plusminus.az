import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCustomerDetailsComponent } from './request-customer-details.component';

describe('RequestCustomerDetailsComponent', () => {
  let component: RequestCustomerDetailsComponent;
  let fixture: ComponentFixture<RequestCustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCustomerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
