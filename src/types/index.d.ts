// https://developers.themoviedb.org/3/movies

interface BaseResponse {
  page: number;
  total_results: number;
  total_pages: number;
}

interface MovieResponse extends BaseResponse {
  results: Movie[];
}

interface MovieType {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
