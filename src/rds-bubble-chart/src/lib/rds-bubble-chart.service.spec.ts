import { TestBed } from '@angular/core/testing';

import { RdsBubbleChartService } from './rds-bubble-chart.service';

describe('RdsBubbleChartService', () => {
  let service: RdsBubbleChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsBubbleChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
