import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CharactersApiService } from './characters-api.service';

describe('CharactersApiService', () => {
  let service: CharactersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], providers: [HttpClient]
    });
    service = TestBed.inject(CharactersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
