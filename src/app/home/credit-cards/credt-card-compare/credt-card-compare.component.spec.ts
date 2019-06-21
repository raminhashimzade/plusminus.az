import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredtCardCompareComponent } from './credt-card-compare.component';

describe('CredtCardCompareComponent', () => {
  let component: CredtCardCompareComponent;
  let fixture: ComponentFixture<CredtCardCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredtCardCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredtCardCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
