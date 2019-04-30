import { TestBed } from '@angular/core/testing';

import { ServicequestionnairesService } from './servicequestionnaires.service';

describe('ServicequestionnairesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicequestionnairesService = TestBed.get(ServicequestionnairesService);
    expect(service).toBeTruthy();
  });
});
