import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreditCardsComponent } from './admin-credit-cards.component';

describe('AdminCreditCardsComponent', () => {
  let component: AdminCreditCardsComponent;
  let fixture: ComponentFixture<AdminCreditCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreditCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
