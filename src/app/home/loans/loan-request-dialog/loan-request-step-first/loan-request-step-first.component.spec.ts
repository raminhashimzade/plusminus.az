import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestStepFirstComponent } from './loan-request-step-first.component';

describe('LoanRequestStepFirstComponent', () => {
  let component: LoanRequestStepFirstComponent;
  let fixture: ComponentFixture<LoanRequestStepFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRequestStepFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestStepFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
