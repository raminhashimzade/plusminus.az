import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansCompareComponent } from './loans-compare.component';

describe('LoansCompareComponent', () => {
  let component: LoansCompareComponent;
  let fixture: ComponentFixture<LoansCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
