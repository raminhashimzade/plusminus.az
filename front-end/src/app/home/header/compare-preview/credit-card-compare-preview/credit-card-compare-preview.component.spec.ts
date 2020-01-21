import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardComparePreviewComponent } from './credit-card-compare-preview.component';

describe('CreditCardComparePreviewComponent', () => {
  let component: CreditCardComparePreviewComponent;
  let fixture: ComponentFixture<CreditCardComparePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardComparePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardComparePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
