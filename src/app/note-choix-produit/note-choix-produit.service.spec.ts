import { TestBed } from '@angular/core/testing';

import { NoteChoixProduitService } from './note-choix-produit.service';

describe('NoteChoixProduitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteChoixProduitService = TestBed.get(NoteChoixProduitService);
    expect(service).toBeTruthy();
  });
});
