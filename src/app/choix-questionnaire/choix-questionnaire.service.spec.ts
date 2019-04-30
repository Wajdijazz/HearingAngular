import { TestBed } from '@angular/core/testing';

import { ChoixQuestionnaireService } from './choix-questionnaire.service';

describe('ChoixQuestionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChoixQuestionnaireService = TestBed.get(ChoixQuestionnaireService);
    expect(service).toBeTruthy();
  });
});
