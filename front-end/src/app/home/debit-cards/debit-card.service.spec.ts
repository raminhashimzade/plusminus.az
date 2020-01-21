import { TestBed } from '@angular/core/testing';

import { DebitCardService } from './debit-card.service';

describe('DebitCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebitCardService = TestBed.get(DebitCardService);
    expect(service).toBeTruthy();
  });
});
