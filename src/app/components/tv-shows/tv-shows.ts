import { Component, signal } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Media } from '../../models/movie.interface';

@Component({
  selector: 'app-tv-shows',
  imports: [],
  templateUrl: './tv-shows.html',
  styleUrl: './tv-shows.css',
})
export class TvShows {
  constructor(private movieService: MovieService) {}

  tvShowsList = signal<Media[]>([]);

  ngOnInit() {
    this.movieService.getTvShows().subscribe((res: any) => {
      this.tvShowsList.set(res.results);
    });
  }
}
