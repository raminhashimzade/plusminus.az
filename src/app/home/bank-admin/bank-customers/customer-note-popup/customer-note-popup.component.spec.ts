import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNotePopupComponent } from './customer-note-popup.component';

describe('CustomerNotePopupComponent', () => {
  let component: CustomerNotePopupComponent;
  let fixture: ComponentFixture<CustomerNotePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerNotePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNotePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
