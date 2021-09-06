import { TestBed } from '@angular/core/testing';

import { SatisfactionTrackerService } from './satisfaction-tracker.service';

describe('SatisfactionTrackerService', () => {
  let service: SatisfactionTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatisfactionTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
