import { Component, signal } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Media } from '../../models/movie.interface';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  imports: [FormsModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  filteredMovies = signal<Media[]>([]);
  searchTerm: string = '';

  constructor(
    private movieService: MovieService,
    private router: Router,
  ) {}
  moviesList = signal<Media[]>([]);

  ngOnInit() {
    this.movieService.getMovies().subscribe((res: any) => {
      this.moviesList.set(res.results);
      this.filteredMovies.set(res.results);
    });
  }
  goToDescription(id: number, mediaType: string) {
    this.router.navigate(['/description', id, mediaType]);
  }
  onSearch() {
    this.filteredMovies.set(
      this.moviesList().filter((movie) =>
        movie.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
      ),
    );
  }
}
