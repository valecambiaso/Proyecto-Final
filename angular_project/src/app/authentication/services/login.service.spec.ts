import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    }).compileComponents();
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
