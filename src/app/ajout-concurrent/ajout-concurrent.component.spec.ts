import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutConcurrentComponent } from './ajout-concurrent.component';

describe('AjoutConcurrentComponent', () => {
  let component: AjoutConcurrentComponent;
  let fixture: ComponentFixture<AjoutConcurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutConcurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutConcurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
