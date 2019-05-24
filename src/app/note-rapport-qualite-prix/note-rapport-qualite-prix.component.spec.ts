import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRapportQualitePrixComponent } from './note-rapport-qualite-prix.component';

describe('NoteRapportQualitePrixComponent', () => {
  let component: NoteRapportQualitePrixComponent;
  let fixture: ComponentFixture<NoteRapportQualitePrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteRapportQualitePrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteRapportQualitePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
