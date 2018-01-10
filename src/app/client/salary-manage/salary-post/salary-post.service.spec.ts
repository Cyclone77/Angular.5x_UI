import { TestBed, inject } from '@angular/core/testing';

import { SalaryPostService } from './salary-post.service';

describe('SalaryPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalaryPostService]
    });
  });

  it('should be created', inject([SalaryPostService], (service: SalaryPostService) => {
    expect(service).toBeTruthy();
  }));
});
