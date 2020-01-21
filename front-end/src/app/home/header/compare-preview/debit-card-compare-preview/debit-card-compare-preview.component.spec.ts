import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCardComparePreviewComponent } from './debit-card-compare-preview.component';

describe('DebitCardComparePreviewComponent', () => {
  let component: DebitCardComparePreviewComponent;
  let fixture: ComponentFixture<DebitCardComparePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCardComparePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCardComparePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
