import { TestBed } from '@angular/core/testing';

import { AdminDepositService } from './admin-deposit.service';

describe('AdminDepositService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminDepositService = TestBed.get(AdminDepositService);
    expect(service).toBeTruthy();
  });
});
