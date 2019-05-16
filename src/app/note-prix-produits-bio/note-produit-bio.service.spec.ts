import { TestBed } from '@angular/core/testing';

import { NoteProduitBioService } from './note-produit-bio.service';

describe('NoteProduitBioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteProduitBioService = TestBed.get(NoteProduitBioService);
    expect(service).toBeTruthy();
  });
});
