import { TestBed } from '@angular/core/testing';

import { RdsAreaChartService } from './rds-area-chart.service';

describe('RdsAreaChartService', () => {
  let service: RdsAreaChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsAreaChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
