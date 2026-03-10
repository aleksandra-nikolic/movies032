import { Component, OnInit, signal } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Media } from '../../models/movie.interface';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(private movieService: MovieService) {}

  trendingList = signal<Media[]>([]);

  ngOnInit() {
    this.movieService.getTrending().subscribe((res) => {
      this.trendingList.set(res.results);
    });
  }
}
