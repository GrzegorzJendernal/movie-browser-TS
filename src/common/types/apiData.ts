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
  genres: [{ id: number; name: string }];
}

export interface Person {
  id: number;
  known_for?: Movie[];
  name: string;
  profile_path: string;
  birthday?: string;
  place_of_birth?: string;
}

interface ListData {
  page: number;
  total_pages: number;
  total_results: number;
}

export interface MovieListData extends ListData {
  results: Movie[];
}

export interface PeopleListData extends ListData {
  results: Person[];
}

export interface Params {
  language: string;
  page?: string;
  query?: string;
}

interface Artist {
  id: number;
  name: string;
  profile_path: string;
  credit_id: string;
}
interface Cast extends Artist {
  character: string;
}

interface Crew extends Artist {
  job: string;
}
export interface Credits {
  id: number;
  cast?: Cast[];
  crew?: Crew[];
}
