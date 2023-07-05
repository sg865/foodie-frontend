import { TestBed } from '@angular/core/testing';

import { OrderSuccessfullService } from './order-successfull.service';

describe('OrderSuccessfullService', () => {
  let service: OrderSuccessfullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSuccessfullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
