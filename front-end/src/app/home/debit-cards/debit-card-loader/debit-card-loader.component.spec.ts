import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCardLoaderComponent } from './debit-card-loader.component';

describe('DebitCardLoaderComponent', () => {
  let component: DebitCardLoaderComponent;
  let fixture: ComponentFixture<DebitCardLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCardLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCardLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
