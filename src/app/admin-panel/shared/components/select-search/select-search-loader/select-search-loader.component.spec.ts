import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSearchLoaderComponent } from './select-search-loader.component';

describe('SelectSearchLoaderComponent', () => {
  let component: SelectSearchLoaderComponent;
  let fixture: ComponentFixture<SelectSearchLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSearchLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSearchLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
