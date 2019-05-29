import { TestBed } from '@angular/core/testing';

import { PointeventereponseService } from './pointeventereponse.service';

describe('PointeventereponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointeventereponseService = TestBed.get(PointeventereponseService);
    expect(service).toBeTruthy();
  });
});
