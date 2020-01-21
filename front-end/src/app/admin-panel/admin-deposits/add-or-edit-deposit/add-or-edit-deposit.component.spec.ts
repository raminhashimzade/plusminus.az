import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditDepositComponent } from './add-or-edit-deposit.component';

describe('AddOrEditDepositComponent', () => {
  let component: AddOrEditDepositComponent;
  let fixture: ComponentFixture<AddOrEditDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
