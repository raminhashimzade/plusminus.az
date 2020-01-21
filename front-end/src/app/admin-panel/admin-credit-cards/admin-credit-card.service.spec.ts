import { TestBed } from '@angular/core/testing';

import { AdminCreditCardService } from './admin-credit-card.service';

describe('AdminCreditCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCreditCardService = TestBed.get(AdminCreditCardService);
    expect(service).toBeTruthy();
  });
});
