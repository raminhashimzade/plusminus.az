import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCardsTableComponent } from './debit-cards-table.component';

describe('DebitCardsTableComponent', () => {
  let component: DebitCardsTableComponent;
  let fixture: ComponentFixture<DebitCardsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCardsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCardsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
