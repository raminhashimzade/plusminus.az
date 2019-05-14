import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateVisualizeComponent } from './exchange-rate-visualize.component';

describe('ExchangeRateVisualizeComponent', () => {
  let component: ExchangeRateVisualizeComponent;
  let fixture: ComponentFixture<ExchangeRateVisualizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRateVisualizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
