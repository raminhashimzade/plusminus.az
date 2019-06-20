import { TestBed } from '@angular/core/testing';

import { AdminDebitCardsService } from './admin-debit-cards.service';

describe('AdminDebitCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminDebitCardsService = TestBed.get(AdminDebitCardsService);
    expect(service).toBeTruthy();
  });
});
