import { TestBed } from '@angular/core/testing';

import { CartContextService } from './cart-context.service';

describe('CartContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartContextService = TestBed.get(CartContextService);
    expect(service).toBeTruthy();
  });
});
