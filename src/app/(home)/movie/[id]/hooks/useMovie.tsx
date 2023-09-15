'use client';
import Axios from '@/libs/axios';
import { creditsType, movieType } from '@/types/movie';
import { AxiosError } from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useMovie = () => {
  const pathName = useParams();
  const id = pathName.id;
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({} as movieType);
  const [credits, setCredits] = useState({} as creditsType);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchMovies().then(() => {});
  }, []);

  async function fetchMovies() {
    try {
      const fetchedMovie = await fetchMovie();
      setMovie(fetchedMovie.movie);
      setCredits(fetchedMovie.credits);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(
          error.response?.data.status_message ||
            error.response?.data ||
            'Server downtime, try again later!!'
        );
      }
    } finally {
      setLoading(false);
    }
  }

  const getUTCDate = (date: string) => {
    const localReleaseDate = new Date(date);
    const utcReleaseDate = new Date(
      localReleaseDate.getTime() - localReleaseDate.getTimezoneOffset() * 60000
    );
    return utcReleaseDate;
  };

  const fetchMovie = async () => {
    const metaData = '?append_to_response=videos,images,credits'
    const { data: movie } = await Axios.get<movieType>(`/movie/${id}${metaData}`);
    const { data: credits } = await Axios.get<creditsType>(
      `/movie/${id}/credits`
    );
    const data = {
      movie,
      credits,
    };
    return data;
  };
  return { movie, loading, credits, error, getUTCDate};
};

export default useMovie;
