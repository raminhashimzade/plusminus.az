import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditLoanComponent } from './add-or-edit-loan.component';

describe('AddOrEditLoanComponent', () => {
  let component: AddOrEditLoanComponent;
  let fixture: ComponentFixture<AddOrEditLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
