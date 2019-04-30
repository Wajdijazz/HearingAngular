import { TestBed } from '@angular/core/testing';

import { DetailQuestionnaireService } from './detail-questionnaire.service';

describe('DetailQuestionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailQuestionnaireService = TestBed.get(DetailQuestionnaireService);
    expect(service).toBeTruthy();
  });
});
