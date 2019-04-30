import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSpecialesComponent } from './services-speciales.component';

describe('ServicesSpecialesComponent', () => {
  let component: ServicesSpecialesComponent;
  let fixture: ComponentFixture<ServicesSpecialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSpecialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSpecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
