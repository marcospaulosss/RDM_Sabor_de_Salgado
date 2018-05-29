import { TestBed, async, inject } from '@angular/core/testing';

import { LoginResolver } from './login.resolver';

describe('LoginResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginResolver]
    });
  });

  it('should ...', inject([LoginResolver], (guard: LoginResolver) => {
    expect(guard).toBeTruthy();
  }));
});
