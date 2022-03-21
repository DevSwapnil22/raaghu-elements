import { TestBed } from '@angular/core/testing';

import { RdsBoolChartService } from './rds-bool-chart.service';

describe('RdsBoolChartService', () => {
  let service: RdsBoolChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsBoolChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
