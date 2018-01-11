import { TestBed, inject } from '@angular/core/testing';

import { SalaryEntertingService } from './salary-enterting.service';

describe('SalaryEntertingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalaryEntertingService]
    });
  });

  it('should be created', inject([SalaryEntertingService], (service: SalaryEntertingService) => {
    expect(service).toBeTruthy();
  }));
});
