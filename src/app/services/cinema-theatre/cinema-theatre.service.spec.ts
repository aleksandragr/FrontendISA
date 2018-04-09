import { TestBed, inject } from '@angular/core/testing';

import { CinemaTheatreService } from './cinema-theatre.service';

describe('CinemaTheatreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinemaTheatreService]
    });
  });

  it('should be created', inject([CinemaTheatreService], (service: CinemaTheatreService) => {
    expect(service).toBeTruthy();
  }));
});
