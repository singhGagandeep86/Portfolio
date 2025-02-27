import { TestBed } from '@angular/core/testing';

import { ProjectsdataService } from './projectsdata.service';

describe('ProjectsdataService', () => {
  let service: ProjectsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
