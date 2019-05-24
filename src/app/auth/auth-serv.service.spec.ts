import { TestBed } from '@angular/core/testing';

import { AuthServService } from './auth-serv.service';

describe('AuthServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthServService = TestBed.get(AuthServService);
    expect(service).toBeTruthy();
  });
});
