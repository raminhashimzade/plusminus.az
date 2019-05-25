import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositsCompareComponent } from './deposits-compare.component';

describe('DepositsCompareComponent', () => {
  let component: DepositsCompareComponent;
  let fixture: ComponentFixture<DepositsCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositsCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositsCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
