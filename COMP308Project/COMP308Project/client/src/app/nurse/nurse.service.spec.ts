import { TestBed } from '@angular/core/testing';

import { NurseService } from './nurse.service';

describe('NurseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NurseService = TestBed.get(NurseService);
    expect(service).toBeTruthy();
  });
});
