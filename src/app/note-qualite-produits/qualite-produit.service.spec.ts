import { TestBed } from '@angular/core/testing';

import { QualiteProduitService } from './qualite-produit.service';

describe('QualiteProduitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QualiteProduitService = TestBed.get(QualiteProduitService);
    expect(service).toBeTruthy();
  });
});
