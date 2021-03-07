import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ComicsApiService } from './comics-api.service';

describe('ComicsApiService', () => {
  let service: ComicsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], providers: [HttpClient]
    });
    service = TestBed.inject(ComicsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
