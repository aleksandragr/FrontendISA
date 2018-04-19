import { TestBed, inject } from '@angular/core/testing';

import { AdminsystemService } from './adminsystem.service';

describe('AdminsystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminsystemService]
    });
  });

  it('should be created', inject([AdminsystemService], (service: AdminsystemService) => {
    expect(service).toBeTruthy();
  }));
});
