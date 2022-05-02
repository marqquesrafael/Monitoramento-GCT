import { TestBed } from '@angular/core/testing';

import { MonitoramentosApiService } from './monitoramentos-api.service';

describe('MonitoramentosApiService', () => {
  let service: MonitoramentosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoramentosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
