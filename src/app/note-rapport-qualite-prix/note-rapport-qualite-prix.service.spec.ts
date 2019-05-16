import { TestBed } from '@angular/core/testing';

import { NoteRapportQualitePrixService } from './note-rapport-qualite-prix.service';

describe('NoteRapportQualitePrixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteRapportQualitePrixService = TestBed.get(NoteRapportQualitePrixService);
    expect(service).toBeTruthy();
  });
});
