import { TestBed } from '@angular/core/testing';

import { RdsTileService } from './rds-tile.service';

describe('RdsTileService', () => {
  let service: RdsTileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsTileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
