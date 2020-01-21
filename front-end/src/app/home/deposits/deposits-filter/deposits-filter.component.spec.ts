import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositsFilterComponent } from './deposits-filter.component';

describe('DepositsFilterComponent', () => {
  let component: DepositsFilterComponent;
  let fixture: ComponentFixture<DepositsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
