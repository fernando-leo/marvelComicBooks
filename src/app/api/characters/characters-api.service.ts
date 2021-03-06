import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  // var ts = new Date().getTime();

  PUBLIC_KEY = '25cad3a7b66b49ab0c1874ffcd632de5';
  PRIVATE_KEY = '4d97db2ef67ace7351951964415fdf104aa00ea4';
  HASH = '733d4730dcfac96eb8b4bc8283609020';

  URL_API = 'https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b';
  // 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&ts={ts}&apikey=25cad3a7b66b49ab0c1874ffcd632de5&hash=733d4730dcfac96eb8b4bc8283609020';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}