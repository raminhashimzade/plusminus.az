import { TestBed } from '@angular/core/testing';

import { AdminLoanService } from './admin-loan.service';

describe('AdminLoanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminLoanService = TestBed.get(AdminLoanService);
    expect(service).toBeTruthy();
  });
});
