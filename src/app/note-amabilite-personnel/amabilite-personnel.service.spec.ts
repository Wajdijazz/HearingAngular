import { TestBed } from '@angular/core/testing';

import { AmabilitePersonnelService } from './amabilite-personnel.service';

describe('AmabilitePersonnelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmabilitePersonnelService = TestBed.get(AmabilitePersonnelService);
    expect(service).toBeTruthy();
  });
});
