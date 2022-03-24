import { TestBed } from '@angular/core/testing';

import { RdsValidationService } from './rds-validation.service';

describe('RdsValidationService', () => {
  let service: RdsValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
