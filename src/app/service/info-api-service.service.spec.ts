import { TestBed } from '@angular/core/testing';

import { InfoApiServiceService } from './info-api-service.service';

describe('InfoApiServiceService', () => {
  let service: InfoApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
