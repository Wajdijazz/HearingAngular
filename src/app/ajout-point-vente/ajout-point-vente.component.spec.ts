import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPointVenteComponent } from './ajout-point-vente.component';

describe('AjoutPointVenteComponent', () => {
  let component: AjoutPointVenteComponent;
  let fixture: ComponentFixture<AjoutPointVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPointVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPointVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
