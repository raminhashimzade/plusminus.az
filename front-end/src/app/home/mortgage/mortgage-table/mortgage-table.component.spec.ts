import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageTableComponent } from './mortgage-table.component';

describe('MortgageTableComponent', () => {
  let component: MortgageTableComponent;
  let fixture: ComponentFixture<MortgageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
