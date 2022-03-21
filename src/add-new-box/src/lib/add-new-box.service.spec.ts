import { TestBed } from '@angular/core/testing';

import { AddNewBoxService } from './add-new-box.service';

describe('AddNewBoxService', () => {
  let service: AddNewBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
