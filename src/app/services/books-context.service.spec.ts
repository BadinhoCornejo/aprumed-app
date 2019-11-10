import { TestBed } from '@angular/core/testing';

import { BooksContextService } from './books-context.service';

describe('BooksContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksContextService = TestBed.get(BooksContextService);
    expect(service).toBeTruthy();
  });
});
