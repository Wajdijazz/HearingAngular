import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteQualiteMaterielComponent } from './note-qualite-materiel.component';

describe('NoteQualiteMaterielComponent', () => {
  let component: NoteQualiteMaterielComponent;
  let fixture: ComponentFixture<NoteQualiteMaterielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteQualiteMaterielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteQualiteMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
