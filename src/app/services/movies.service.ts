import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie';
import { HttpHeaders } from '../../../node_modules/@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  API_END_POINT = "http://127.0.0.1:8000/api";

  constructor(private httpClient: HttpClient) { }

  save(movie: Movie) {
    const headers = new HttpHeaders({'content-type' : 'application/json'});
    return this.httpClient.post(this.API_END_POINT + '/movies', movie, {headers: headers} );
  }
}
