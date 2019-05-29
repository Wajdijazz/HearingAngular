import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrentSocieteComponent } from './concurrent-societe.component';

describe('ConcurrentSocieteComponent', () => {
  let component: ConcurrentSocieteComponent;
  let fixture: ComponentFixture<ConcurrentSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcurrentSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcurrentSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
