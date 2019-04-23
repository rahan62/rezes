import { TestBed } from '@angular/core/testing';

import { GlobalDataServiceService } from './global-data-service.service';

describe('GlobalDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalDataServiceService = TestBed.get(GlobalDataServiceService);
    expect(service).toBeTruthy();
  });
});
