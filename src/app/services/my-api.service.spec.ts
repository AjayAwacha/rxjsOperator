import { TestBed } from '@angular/core/testing';

import { MyAPIService } from './my-api.service';

describe('MyAPIService', () => {
  let service: MyAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
