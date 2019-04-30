import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixQuestionnaireComponent } from './choix-questionnaire.component';

describe('ChoixQuestionnaireComponent', () => {
  let component: ChoixQuestionnaireComponent;
  let fixture: ComponentFixture<ChoixQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
