import { TestBed } from '@angular/core/testing';

import { SimActivationService } from './sim-activation.service';

describe('SimActivationService', () => {
  let service: SimActivationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimActivationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
