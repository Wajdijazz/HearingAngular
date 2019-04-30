import { TestBed } from '@angular/core/testing';

import { PointVenteService } from './point-vente.service';

describe('PointVenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointVenteService = TestBed.get(PointVenteService);
    expect(service).toBeTruthy();
  });
});
