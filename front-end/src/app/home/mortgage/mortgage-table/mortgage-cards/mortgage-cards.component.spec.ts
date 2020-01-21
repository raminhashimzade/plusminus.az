import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCardsComponent } from './mortgage-cards.component';

describe('MortgageCardsComponent', () => {
  let component: MortgageCardsComponent;
  let fixture: ComponentFixture<MortgageCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
