'use client';
import Axios from '@/libs/axios';
import { ChangeEvent, useState } from 'react';
import { Movie } from './actions';
import { TopRated, popularMovieType } from '@/types/movie';
import { AxiosError } from 'axios';

const useSearch = () => {
  const [result, setResult] = useState<TopRated[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function LoadAndReset() {
    setIsLoading(true);
    setErrorMessage('');
    setResult([]);
    setSearchQuery('');
    setShowResult(false);
  }
  async function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    LoadAndReset();
    const search = e.target.value;
    setSearchQuery(search);
    if (!search) {
      return;
    }

    if (search.length <= 2) {
      search.length === 2
        ? setErrorMessage('search value must be at least (3) characters')
        : null;
      return;
    }

    setShowResult(true);

    try {
      const { data } = await Axios.get<Movie>(`/search/movie?query=${search}`);
      const output = data.results.slice(0, 6);
      output.length > 0 ? setResult(output) : setErrorMessage('No movie found');
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage(
          error.response?.data || 'An error occured, try again later!!'
        );
      }
    } finally {
      setIsLoading(false);
    }
  }
  return {
    isLoading,
    result,
    errorMessage,
    showResult,
    searchQuery,
    handleSearch,
  };
};

export default useSearch;
