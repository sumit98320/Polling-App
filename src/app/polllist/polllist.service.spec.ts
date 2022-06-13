import { TestBed } from '@angular/core/testing';

import { PolllistService } from './polllist.service';

describe('PolllistService', () => {
  let service: PolllistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolllistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
