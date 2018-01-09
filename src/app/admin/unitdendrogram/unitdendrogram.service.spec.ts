import { TestBed, inject } from '@angular/core/testing';

import { UnitdendrogramService } from './unitdendrogram.service';

describe('UnitdendrogramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitdendrogramService]
    });
  });

  it('should be created', inject([UnitdendrogramService], (service: UnitdendrogramService) => {
    expect(service).toBeTruthy();
  }));
});
