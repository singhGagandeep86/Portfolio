import { TestBed } from '@angular/core/testing';

import { WindowService } from './window.service';
import { InjectionToken } from '@angular/core';


export const WINDOW = new InjectionToken('window token');

export abstract class windowRef {
get nativeWindow(): Window | object {
  throw new Error('Method not implemented');
}
}



describe('WindowService', () => {
  let service: WindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
