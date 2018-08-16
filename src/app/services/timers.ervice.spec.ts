import { TestBed, inject } from '@angular/core/testing';

import { TimerService } from './timer.service';

describe('TimerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerService]
    });
  });

  it('should be created', inject([TimerService], (service: TimerService) => {
    expect(service).toBeTruthy();
  }));
});
