import { TestBed, inject } from '@angular/core/testing';

import { NavBarSearchService } from './nav-bar-search.service';

describe('NavBarSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavBarSearchService]
    });
  });

  it('should be created', inject([NavBarSearchService], (service: NavBarSearchService) => {
    expect(service).toBeTruthy();
  }));
});
