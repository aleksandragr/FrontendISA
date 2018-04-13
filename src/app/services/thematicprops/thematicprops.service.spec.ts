import { TestBed, inject } from '@angular/core/testing';

import { ThematicpropsService } from './thematicprops.service';

describe('ThematicpropsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThematicpropsService]
    });
  });

  it('should be created', inject([ThematicpropsService], (service: ThematicpropsService) => {
    expect(service).toBeTruthy();
  }));
});
