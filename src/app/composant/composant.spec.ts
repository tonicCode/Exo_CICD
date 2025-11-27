import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant } from './composant';

describe('Composant', () => {
  let component: Composant;
  let fixture: ComponentFixture<Composant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
