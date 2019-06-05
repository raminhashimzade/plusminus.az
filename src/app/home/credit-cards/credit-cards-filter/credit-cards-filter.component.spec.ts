import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardsFilterComponent } from './credit-cards-filter.component';

describe('CreditCardsFilterComponent', () => {
  let component: CreditCardsFilterComponent;
  let fixture: ComponentFixture<CreditCardsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
