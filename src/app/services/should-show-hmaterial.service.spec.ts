import { TestBed } from '@angular/core/testing';

import { ShouldShowHMaterialService } from './should-show-hmaterial.service';

describe('ShouldShowHMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShouldShowHMaterialService = TestBed.get(ShouldShowHMaterialService);
    expect(service).toBeTruthy();
  });
});
