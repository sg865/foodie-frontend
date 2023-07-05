import { TestBed } from '@angular/core/testing';

import { HideAndshowService } from './hide-andshow.service';

describe('HideAndshowService', () => {
  let service: HideAndshowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideAndshowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
