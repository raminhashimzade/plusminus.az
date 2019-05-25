/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DepositsCardsComponent } from './deposits-cards.component';

describe('DepositsCardsComponent', () => {
  let component: DepositsCardsComponent;
  let fixture: ComponentFixture<DepositsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
