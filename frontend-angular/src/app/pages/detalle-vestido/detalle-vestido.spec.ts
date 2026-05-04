import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVestido } from './detalle-vestido';

describe('DetalleVestido', () => {
  let component: DetalleVestido;
  let fixture: ComponentFixture<DetalleVestido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleVestido],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleVestido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
