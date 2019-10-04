import { TestBed } from '@angular/core/testing';

import { DotpropService } from './dotprop.service';

describe('DotpropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DotpropService = TestBed.get(DotpropService);
    expect(service).toBeTruthy();
  });
});
