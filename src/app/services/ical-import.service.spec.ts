import { TestBed } from '@angular/core/testing';

import { IcalImportService } from './ical-import.service';

describe('IcalImportService', () => {
  let service: IcalImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcalImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
