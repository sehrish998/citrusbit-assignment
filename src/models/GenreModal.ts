

export interface GenreResponse {
  data: {
    genres: Genre[];
  };
}
export interface Genre {
  id: number;
  name: string;
}
