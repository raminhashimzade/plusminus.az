import { TestBed } from '@angular/core/testing';

import { BankAdminService } from './bank-admin.service';

describe('BankAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankAdminService = TestBed.get(BankAdminService);
    expect(service).toBeTruthy();
  });
});
