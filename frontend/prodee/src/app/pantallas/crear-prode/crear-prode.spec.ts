import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProde } from './crear-prode';

describe('CrearProde', () => {
  let component: CrearProde;
  let fixture: ComponentFixture<CrearProde>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearProde],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearProde);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
