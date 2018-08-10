import { TestBed, async, inject } from '@angular/core/testing';

import { FormUsuarioResolver } from './form-usuario.resolver';

describe('FormUsuarioResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormUsuarioResolver]
    });
  });

  it('should ...', inject([FormUsuarioResolver], (guard: FormUsuarioResolver) => {
    expect(guard).toBeTruthy();
  }));
});
