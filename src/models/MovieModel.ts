

export interface MovieResponse {
  data: {
    results: Movie[];
  };
}

export interface Movie {
  id:number,
  vote_count: number;
  original_language: string;
  adult: boolean;
  video: boolean;
  release_date: number;
  popularity: number;
  vote_average: number;
  overview: string;
  title: string;
  genre_ids: number[];
  poster_path: string;
  original_title: string;
}


