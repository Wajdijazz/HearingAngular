import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutQuestionsComponent } from './ajout-questions.component';

describe('AjoutQuestionsComponent', () => {
  let component: AjoutQuestionsComponent;
  let fixture: ComponentFixture<AjoutQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
