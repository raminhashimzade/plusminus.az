import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageFilterComponent } from './mortgage-filter.component';

describe('MortgageFilterComponent', () => {
  let component: MortgageFilterComponent;
  let fixture: ComponentFixture<MortgageFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
