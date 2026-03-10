export interface Media {
  id: number;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  media_type: 'movie' | 'tv';

  title: string;
  original_title?: string;

  name: string;
  original_name?: string;

  overview: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  release_date?: string; // samo filmovi
  first_air_date?: string; // samo serije
}
export interface TrendingResponse {
  page: number;
  results: Media[];
  total_pages: number;
  total_results: number;
}
