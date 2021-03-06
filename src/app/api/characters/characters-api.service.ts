import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = '25cad3a7b66b49ab0c1874ffcd632de5';
  HASH = '3717b65c0b320ed6984b9abfa913322b';

  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }

  getByCharacterName(name: string): Observable<any> {
    return this.http.get<any>(this.URL_API + `&nameStartsWith=${name}`)
      .pipe(map((data: any) => data.data.results))
  }
}