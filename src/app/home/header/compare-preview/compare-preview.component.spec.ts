import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePreviewComponent } from './compare-preview.component';

describe('ComparePreviewComponent', () => {
  let component: ComparePreviewComponent;
  let fixture: ComponentFixture<ComparePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
