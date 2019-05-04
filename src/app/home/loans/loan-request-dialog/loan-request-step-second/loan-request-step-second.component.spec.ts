import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestStepSecondComponent } from './loan-request-step-second.component';

describe('LoanRequestStepSecondComponent', () => {
  let component: LoanRequestStepSecondComponent;
  let fixture: ComponentFixture<LoanRequestStepSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRequestStepSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestStepSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
