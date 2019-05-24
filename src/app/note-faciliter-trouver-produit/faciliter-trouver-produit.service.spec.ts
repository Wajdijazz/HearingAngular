import { TestBed } from '@angular/core/testing';

import { FaciliterTrouverProduitService } from './faciliter-trouver-produit.service';

describe('FaciliterTrouverProduitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaciliterTrouverProduitService = TestBed.get(FaciliterTrouverProduitService);
    expect(service).toBeTruthy();
  });
});
