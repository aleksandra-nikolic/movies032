import { Component, signal } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Media } from '../../models/movie.interface';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tv-shows',
  imports: [FormsModule],
  templateUrl: './tv-shows.html',
  styleUrl: './tv-shows.css',
})
export class TvShows {
  filteredSeries = signal<Media[]>([]);
  searchTerm: string = '';
  constructor(
    private movieService: MovieService,
    private router: Router,
  ) {}

  tvShowsList = signal<Media[]>([]);

  ngOnInit() {
    this.movieService.getTvShows().subscribe((res: any) => {
      this.tvShowsList.set(res.results);
      this.filteredSeries.set(res.results);
    });
  }
  goToDescription(id: number, mediaType: string) {
    this.router.navigate(['/description', id, mediaType]);
  }
  onSearch() {
    this.filteredSeries.set(
      this.tvShowsList().filter((tv) =>
        tv.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
      ),
    );
  }
}
