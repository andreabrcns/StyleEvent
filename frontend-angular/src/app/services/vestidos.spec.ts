import { TestBed } from '@angular/core/testing';

import { Vestidos } from './vestidos';

describe('Vestidos', () => {
  let service: Vestidos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vestidos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
