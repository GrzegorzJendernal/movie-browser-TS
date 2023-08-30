export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  production_countries?: [{ iso_3166_1: string; name: string }];
}

export interface MovieListData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Params {
  language: string;
  page?: string;
  query?: string;
}
