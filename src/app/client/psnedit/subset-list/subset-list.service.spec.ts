import { TestBed, inject } from '@angular/core/testing';

import { SubsetListService } from './subset-list.service';

describe('SubsetListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubsetListService]
    });
  });

  it('should be created', inject([SubsetListService], (service: SubsetListService) => {
    expect(service).toBeTruthy();
  }));
});
