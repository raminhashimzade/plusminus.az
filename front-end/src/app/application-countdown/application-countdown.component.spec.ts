import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCountdownComponent } from './application-countdown.component';

describe('ApplicationCountdownComponent', () => {
  let component: ApplicationCountdownComponent;
  let fixture: ComponentFixture<ApplicationCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
