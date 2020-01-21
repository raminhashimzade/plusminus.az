import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestErrorComponent } from './loan-request-error.component';

describe('LoanRequestErrorComponent', () => {
  let component: LoanRequestErrorComponent;
  let fixture: ComponentFixture<LoanRequestErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRequestErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
