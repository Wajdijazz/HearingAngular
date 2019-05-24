import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePrixProduitsBioComponent } from './note-prix-produits-bio.component';

describe('NotePrixProduitsBioComponent', () => {
  let component: NotePrixProduitsBioComponent;
  let fixture: ComponentFixture<NotePrixProduitsBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotePrixProduitsBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePrixProduitsBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
