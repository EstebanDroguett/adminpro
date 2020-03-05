import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueba1Component } from './prueba1.component';

describe('Prueba1Component', () => {
  let component: Prueba1Component;
  let fixture: ComponentFixture<Prueba1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prueba1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prueba1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
