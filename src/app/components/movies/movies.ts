import { Component, signal } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Media } from '../../models/movie.interface';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  constructor(private movieService: MovieService) {}
  moviesList = signal<Media[]>([]);

  ngOnInit() {
    this.movieService.getMovies().subscribe((res: any) => {
      this.moviesList.set(res.results);
    });
  }
}
