import { TestBed } from '@angular/core/testing';

import { NoteQualiteProduitsBioService } from './note-qualite-produits-bio.service';

describe('NoteQualiteProduitsBioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteQualiteProduitsBioService = TestBed.get(NoteQualiteProduitsBioService);
    expect(service).toBeTruthy();
  });
});
