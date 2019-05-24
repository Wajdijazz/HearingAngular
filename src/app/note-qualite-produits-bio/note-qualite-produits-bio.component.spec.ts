import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteQualiteProduitsBioComponent } from './note-qualite-produits-bio.component';

describe('NoteQualiteProduitsBioComponent', () => {
  let component: NoteQualiteProduitsBioComponent;
  let fixture: ComponentFixture<NoteQualiteProduitsBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteQualiteProduitsBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteQualiteProduitsBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
