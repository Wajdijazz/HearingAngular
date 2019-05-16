import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteChoixProduitComponent } from './note-choix-produit.component';

describe('NoteChoixProduitComponent', () => {
  let component: NoteChoixProduitComponent;
  let fixture: ComponentFixture<NoteChoixProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteChoixProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteChoixProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
