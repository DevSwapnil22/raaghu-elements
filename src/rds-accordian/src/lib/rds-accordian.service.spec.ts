import { TestBed } from '@angular/core/testing';

import { RdsAccordianService } from './rds-accordian.service';

describe('RdsAccordianService', () => {
  let service: RdsAccordianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsAccordianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
