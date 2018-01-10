import { TestBed, inject } from '@angular/core/testing';

import { SalaryPostService } from './salarypost.service';

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
