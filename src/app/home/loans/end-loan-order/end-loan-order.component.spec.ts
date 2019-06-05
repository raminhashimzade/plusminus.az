import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndLoanOrderComponent } from './end-loan-order.component';

describe('EndLoanOrderComponent', () => {
  let component: EndLoanOrderComponent;
  let fixture: ComponentFixture<EndLoanOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndLoanOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndLoanOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
