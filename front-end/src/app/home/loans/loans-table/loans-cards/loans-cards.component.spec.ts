import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansCardsComponent } from './loans-cards.component';

describe('LoansCardsComponent', () => {
  let component: LoansCardsComponent;
  let fixture: ComponentFixture<LoansCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
