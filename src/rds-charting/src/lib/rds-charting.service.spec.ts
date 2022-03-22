import { TestBed } from '@angular/core/testing';

import { RdsChartingService } from './rds-charting.service';

describe('RdsChartingService', () => {
  let service: RdsChartingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsChartingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
