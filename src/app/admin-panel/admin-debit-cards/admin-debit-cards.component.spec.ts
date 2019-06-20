import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDebitCardsComponent } from './admin-debit-cards.component';

describe('AdminDebitCardsComponent', () => {
  let component: AdminDebitCardsComponent;
  let fixture: ComponentFixture<AdminDebitCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDebitCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDebitCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
