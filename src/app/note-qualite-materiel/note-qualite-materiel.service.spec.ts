import { TestBed } from '@angular/core/testing';

import { NoteQualiteMaterielService } from './note-qualite-materiel.service';

describe('NoteQualiteMaterielService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteQualiteMaterielService = TestBed.get(NoteQualiteMaterielService);
    expect(service).toBeTruthy();
  });
});
