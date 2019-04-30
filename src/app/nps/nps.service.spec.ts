import { TestBed } from '@angular/core/testing';

import { NpsService } from './nps.service';

describe('NpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NpsService = TestBed.get(NpsService);
    expect(service).toBeTruthy();
  });
});
