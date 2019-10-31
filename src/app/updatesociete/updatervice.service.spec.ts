import { TestBed } from '@angular/core/testing';

import { UpdaterviceService } from './updatervice.service';

describe('UpdaterviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdaterviceService = TestBed.get(UpdaterviceService);
    expect(service).toBeTruthy();
  });
});
