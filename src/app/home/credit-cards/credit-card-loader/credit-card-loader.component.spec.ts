import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardLoaderComponent } from './credit-card-loader.component';

describe('CreditCardLoaderComponent', () => {
  let component: CreditCardLoaderComponent;
  let fixture: ComponentFixture<CreditCardLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
