import { TestBed } from '@angular/core/testing';

import { EventemiterBusService } from './eventemiter-bus.service';

describe('EventemiterBusService', () => {
  let service: EventemiterBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventemiterBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
