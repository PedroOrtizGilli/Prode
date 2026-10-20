import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProde } from './ver-prode';

describe('VerProde', () => {
  let component: VerProde;
  let fixture: ComponentFixture<VerProde>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerProde],
    }).compileComponents();

    fixture = TestBed.createComponent(VerProde);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
