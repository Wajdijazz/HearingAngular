import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFaciliterTrouverProduitComponent } from './note-faciliter-trouver-produit.component';

describe('NoteFaciliterTrouverProduitComponent', () => {
  let component: NoteFaciliterTrouverProduitComponent;
  let fixture: ComponentFixture<NoteFaciliterTrouverProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFaciliterTrouverProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFaciliterTrouverProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
