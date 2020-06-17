import { TestBed } from '@angular/core/testing';

import { IcalExportService } from './ical-export.service';

describe('IcalExportService', () => {
  let service: IcalExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcalExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
