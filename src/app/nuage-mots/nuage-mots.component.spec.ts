import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuageMotsComponent } from './nuage-mots.component';

describe('NuageMotsComponent', () => {
  let component: NuageMotsComponent;
  let fixture: ComponentFixture<NuageMotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuageMotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuageMotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
