import { TestBed } from '@angular/core/testing';

import { NoteImagePrixService } from './note-image-prix.service';

describe('NoteImagePrixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteImagePrixService = TestBed.get(NoteImagePrixService);
    expect(service).toBeTruthy();
  });
});
