import { TestBed, inject } from '@angular/core/testing';

import { SalarypostService } from './salarypost.service';

describe('SalarypostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalarypostService]
    });
  });

  it('should be created', inject([SalarypostService], (service: SalarypostService) => {
    expect(service).toBeTruthy();
  }));
});
