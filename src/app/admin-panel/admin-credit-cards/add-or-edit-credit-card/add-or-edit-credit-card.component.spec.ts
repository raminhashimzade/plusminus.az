import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditCreditCardComponent } from './add-or-edit-credit-card.component';

describe('AddOrEditCreditCardComponent', () => {
  let component: AddOrEditCreditCardComponent;
  let fixture: ComponentFixture<AddOrEditCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditCreditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
