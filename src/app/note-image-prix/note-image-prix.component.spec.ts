import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteImagePrixComponent } from './note-image-prix.component';

describe('NoteImagePrixComponent', () => {
  let component: NoteImagePrixComponent;
  let fixture: ComponentFixture<NoteImagePrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteImagePrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteImagePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
