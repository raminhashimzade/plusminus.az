import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositComparePreviewComponent } from './deposit-compare-preview.component';

describe('DepositComparePreviewComponent', () => {
  let component: DepositComparePreviewComponent;
  let fixture: ComponentFixture<DepositComparePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositComparePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositComparePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
