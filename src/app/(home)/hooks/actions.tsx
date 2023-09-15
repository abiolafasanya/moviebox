import Axios from '@/libs/axios';
import { TopRated, popularMovieType } from '@/types/movie';

export interface Movie {
  results: TopRated[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface Genre {
  genres: {
    id: number;
    name: string;
  }[];
}

type Rated = {
  results: TopRated[]
}

class MovieController {
  async index() {
    const { data: movies } = await Axios.get<Movie>('/movie/popular');
    const { data: playing } = await Axios.get<Movie>('/movie/now_playing');
    const { data: topRated } = await Axios.get<Rated>(
      '/movie/top_rated?language=en-US&page=1'
    );
    const { data: genreArr } = await Axios.get<Genre>('/genre/movie/list');

    const data = {
      movies: movies.results,
      genres: genreArr.genres,
      playing: playing.results,
      rated: topRated.results,
    };

    return data;
  }
}

const Controller = new MovieController()

export default Controller;
