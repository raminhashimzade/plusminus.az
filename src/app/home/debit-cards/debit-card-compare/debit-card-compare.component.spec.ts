import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCardCompareComponent } from './debit-card-compare.component';

describe('DebitCardCompareComponent', () => {
  let component: DebitCardCompareComponent;
  let fixture: ComponentFixture<DebitCardCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCardCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCardCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
