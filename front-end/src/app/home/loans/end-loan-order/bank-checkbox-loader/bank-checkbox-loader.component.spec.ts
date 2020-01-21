import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCheckboxLoaderComponent } from './bank-checkbox-loader.component';

describe('BankCheckboxLoaderComponent', () => {
  let component: BankCheckboxLoaderComponent;
  let fixture: ComponentFixture<BankCheckboxLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankCheckboxLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankCheckboxLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
