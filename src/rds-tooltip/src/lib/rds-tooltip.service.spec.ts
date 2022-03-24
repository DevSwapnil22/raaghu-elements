import { TestBed } from '@angular/core/testing';

import { RdsTooltipService } from './rds-tooltip.service';

describe('RdsTooltipService', () => {
  let service: RdsTooltipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsTooltipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
