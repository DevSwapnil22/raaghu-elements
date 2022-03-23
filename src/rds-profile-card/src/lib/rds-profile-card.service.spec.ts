import { TestBed } from '@angular/core/testing';

import { RdsProfileCardService } from './rds-profile-card.service';

describe('RdsProfileCardService', () => {
  let service: RdsProfileCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsProfileCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
