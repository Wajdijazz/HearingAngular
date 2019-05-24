import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAmabilitePersonnelComponent } from './note-amabilite-personnel.component';

describe('NoteAmabilitePersonnelComponent', () => {
  let component: NoteAmabilitePersonnelComponent;
  let fixture: ComponentFixture<NoteAmabilitePersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteAmabilitePersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteAmabilitePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
