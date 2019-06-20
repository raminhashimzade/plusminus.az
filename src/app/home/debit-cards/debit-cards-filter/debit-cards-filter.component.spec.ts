import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCardsFilterComponent } from './debit-cards-filter.component';

describe('DebitCardsFilterComponent', () => {
  let component: DebitCardsFilterComponent;
  let fixture: ComponentFixture<DebitCardsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCardsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCardsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
