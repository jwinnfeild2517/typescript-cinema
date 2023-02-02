export interface MoviesStateType {
  results: MovieType[];
  query: string;
  page: number;
}

export interface MovieType {
  title: string;
  poster_path: string;
  id: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
}

export interface moviesApiResponse {
  page?: number;
  results: object[];
}
