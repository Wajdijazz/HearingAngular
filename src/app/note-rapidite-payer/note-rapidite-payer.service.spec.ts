import { TestBed } from '@angular/core/testing';

import { NoteRapiditePayerService } from './note-rapidite-payer.service';

describe('NoteRapiditePayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteRapiditePayerService = TestBed.get(NoteRapiditePayerService);
    expect(service).toBeTruthy();
  });
});
