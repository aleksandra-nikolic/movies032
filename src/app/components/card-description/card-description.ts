import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-card-description',
  imports: [],
  templateUrl: './card-description.html',
  styleUrl: './card-description.css',
})
export class CardDescription {
  movie = signal<any>(null);
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const mediaType = this.route.snapshot.paramMap.get('mediaType');
    this.movieService.getDescription(Number(id), mediaType!).subscribe((res: any) => {
      this.movie.set(res);
    });
  }
}
