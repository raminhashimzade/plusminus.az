import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositsCalcContainerComponent } from './deposits-calc-container.component';

describe('DepositsCalcContainerComponent', () => {
  let component: DepositsCalcContainerComponent;
  let fixture: ComponentFixture<DepositsCalcContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositsCalcContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositsCalcContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
