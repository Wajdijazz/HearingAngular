import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePointeventeComponent } from './update-pointevente.component';

describe('UpdatePointeventeComponent', () => {
  let component: UpdatePointeventeComponent;
  let fixture: ComponentFixture<UpdatePointeventeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePointeventeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePointeventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
