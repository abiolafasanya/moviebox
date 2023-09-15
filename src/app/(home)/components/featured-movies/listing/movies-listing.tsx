'use client';
import useMovies from '@/app/(home)/hooks/useMovies';
import Card from './card';
import { Fragment } from 'react';
import MovieLoader from './movies-loader';
import { popularMovieType } from '@/types/movie';

const MoviesListing = () => {
  const { movies, loading } = useMovies();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 gap-y-20'>
      <Fragment>
        {loading ? <MovieLoader count={4} /> : <Movie movies={movies} />}
      </Fragment>
    </div>
  );
};

const Movie = ({ movies }: { movies: popularMovieType[] }) => {
  return (
    <Fragment>
      {movies.slice(0, 10).map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </Fragment>
  );
};

export default MoviesListing;
