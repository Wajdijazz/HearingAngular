import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteQualiteProduitsComponent } from './note-qualite-produits.component';

describe('NoteQualiteProduitsComponent', () => {
  let component: NoteQualiteProduitsComponent;
  let fixture: ComponentFixture<NoteQualiteProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteQualiteProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteQualiteProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
