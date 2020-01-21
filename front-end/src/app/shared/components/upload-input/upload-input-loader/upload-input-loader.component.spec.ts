import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInputLoaderComponent } from './upload-input-loader.component';

describe('UploadInputLoaderComponent', () => {
  let component: UploadInputLoaderComponent;
  let fixture: ComponentFixture<UploadInputLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadInputLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadInputLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
