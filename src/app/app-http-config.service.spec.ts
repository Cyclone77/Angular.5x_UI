import { TestBed, inject } from '@angular/core/testing';

import { AppHttpConfigService } from './app-http-config.service';

describe('AppHttpConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppHttpConfigService]
    });
  });

  it('should be created', inject([AppHttpConfigService], (service: AppHttpConfigService) => {
    expect(service).toBeTruthy();
  }));
});
