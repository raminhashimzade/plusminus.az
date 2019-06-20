import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditDebitCardComponent } from './add-or-edit-debit-card.component';

describe('AddOrEditDebitCardComponent', () => {
  let component: AddOrEditDebitCardComponent;
  let fixture: ComponentFixture<AddOrEditDebitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditDebitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditDebitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
