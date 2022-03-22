import { TestBed } from '@angular/core/testing';

import { RdsAppConfigService } from './rds-app-config.service';

describe('RdsAppConfigService', () => {
  let service: RdsAppConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsAppConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
