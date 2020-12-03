import { TestBed } from '@angular/core/testing';

import { RegistroService } from './registro.service';

describe('RegistroService', () => {
  let service: RegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[RegistroService]
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
