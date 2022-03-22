import { TestBed } from '@angular/core/testing';

import { RdsAddNewBoxService } from './rds-add-new-box.service';

describe('RdsAddNewBoxService', () => {
  let service: RdsAddNewBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsAddNewBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
