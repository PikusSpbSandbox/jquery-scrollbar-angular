import { TestBed } from '@angular/core/testing';

import { JqueryScrollbarAngularService } from './jquery-scrollbar-angular.service';

describe('JqueryScrollbarAngularService', () => {
  let service: JqueryScrollbarAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JqueryScrollbarAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
