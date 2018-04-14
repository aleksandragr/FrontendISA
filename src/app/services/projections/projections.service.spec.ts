import { TestBed, inject } from '@angular/core/testing';

import { ProjectionsService } from './projections.service';

describe('ProjectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectionsService]
    });
  });

  it('should be created', inject([ProjectionsService], (service: ProjectionsService) => {
    expect(service).toBeTruthy();
  }));
});
