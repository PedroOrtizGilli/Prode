import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirseProde } from './unirse-prode';

describe('UnirseProde', () => {
  let component: UnirseProde;
  let fixture: ComponentFixture<UnirseProde>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnirseProde],
    }).compileComponents();

    fixture = TestBed.createComponent(UnirseProde);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
