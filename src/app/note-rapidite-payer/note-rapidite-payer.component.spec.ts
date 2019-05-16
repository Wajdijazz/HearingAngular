import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRapiditePayerComponent } from './note-rapidite-payer.component';

describe('NoteRapiditePayerComponent', () => {
  let component: NoteRapiditePayerComponent;
  let fixture: ComponentFixture<NoteRapiditePayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteRapiditePayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteRapiditePayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
