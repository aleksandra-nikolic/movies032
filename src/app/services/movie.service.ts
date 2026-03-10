import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TrendingResponse } from '../models/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = environment.baseUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getTrending() {
    return this.http.get<TrendingResponse>(
      `${this.baseUrl}/trending/all/day?api_key=${this.apiKey}`,
    );
  }
  getMovies() {
    return this.http.get<TrendingResponse>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`);
  }
  getTvShows() {
    return this.http.get(`${this.baseUrl}/tv/popular?api_key=${this.apiKey}`);
  }
}
