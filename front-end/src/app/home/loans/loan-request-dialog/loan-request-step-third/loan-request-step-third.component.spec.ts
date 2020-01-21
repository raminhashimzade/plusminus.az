import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestStepThirdComponent } from './loan-request-step-third.component';

describe('LoanRequestStepThirdComponent', () => {
  let component: LoanRequestStepThirdComponent;
  let fixture: ComponentFixture<LoanRequestStepThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRequestStepThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestStepThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
