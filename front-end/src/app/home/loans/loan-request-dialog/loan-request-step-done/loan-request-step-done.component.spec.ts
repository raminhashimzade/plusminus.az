import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestStepDoneComponent } from './loan-request-step-done.component';

describe('LoanRequestStepDoneComponent', () => {
  let component: LoanRequestStepDoneComponent;
  let fixture: ComponentFixture<LoanRequestStepDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRequestStepDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestStepDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
