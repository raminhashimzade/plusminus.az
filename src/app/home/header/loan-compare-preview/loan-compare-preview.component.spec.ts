import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanComparePreviewComponent } from './loan-compare-preview.component';

describe('LoanComparePreviewComponent', () => {
  let component: LoanComparePreviewComponent;
  let fixture: ComponentFixture<LoanComparePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanComparePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComparePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
