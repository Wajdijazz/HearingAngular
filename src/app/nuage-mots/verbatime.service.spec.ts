import { TestBed } from '@angular/core/testing';

import { VerbatimeService } from './verbatime.service';

describe('VerbatimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerbatimeService = TestBed.get(VerbatimeService);
    expect(service).toBeTruthy();
  });
});
