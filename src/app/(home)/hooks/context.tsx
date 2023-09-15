'use client';
import { AxiosError } from 'axios';
import React, { ReactNode, createContext, useEffect, useState } from 'react';
import MovieController from './actions';
import { TopRated, popularMovieType } from '@/types/movie';

export interface Movie {
  loading: boolean;
  movies: TopRated[];
  error: string;
}
const MoviesContext = createContext({} as Movie);

export const MovieContextProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    setLoading(true);
    fetchMovies().then(() => {});
  }, []);

  const fetchMovies = async () => {
    try {
      const data = (await MovieController.index()).rated;
      setMovies(data);
      setLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data);
        setLoading(false);
      }
    }
  };
  return (
    <MoviesContext.Provider
      value={{
        loading: loading || false,
        movies: movies || [],
        error,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
