import { TestBed } from '@angular/core/testing';

import { ConcurrentService } from './concurrent.service';

describe('ConcurrentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConcurrentService = TestBed.get(ConcurrentService);
    expect(service).toBeTruthy();
  });
});
