import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestDialogComponent } from './loan-request-dialog.component';

describe('LoanRequestDialogComponent', () => {
  let component: LoanRequestDialogComponent;
  let fixture: ComponentFixture<LoanRequestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRequestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
