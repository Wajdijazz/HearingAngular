import { TestBed } from '@angular/core/testing';

import { PointventeBySocieteService } from './pointvente-by-societe.service';

describe('PointventeBySocieteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointventeBySocieteService = TestBed.get(PointventeBySocieteService);
    expect(service).toBeTruthy();
  });
});
