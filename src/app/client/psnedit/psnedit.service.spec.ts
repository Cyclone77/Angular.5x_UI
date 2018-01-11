import { TestBed, inject } from '@angular/core/testing';

import { PsneditService } from './psnedit.service';

describe('PsneditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PsneditService]
    });
  });

  it('should be created', inject([PsneditService], (service: PsneditService) => {
    expect(service).toBeTruthy();
  }));
});
