import { TestBed } from '@angular/core/testing';

import { NavbarSearchService } from './navbar-search.service';

describe('NavbarSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarSearchService = TestBed.get(NavbarSearchService);
    expect(service).toBeTruthy();
  });
});
