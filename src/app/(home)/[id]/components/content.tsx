'use client';
import CreditsInfo from './credits';
import ActionButtons from './actions-button';
import DetailsSection from './detials-section';
import Banner from './banner';
import useMovie from '../hooks/useMovie';
import { Fragment } from 'react';
import Loader from '@/ui/shared/loader';
import ErrorMessage from '@/ui/shared/error';
import Image from 'next/image';
import { movieType } from '@/types/movie';

const Content = () => {
  const { credits, error, loading, movie, getUTCDate } = useMovie();
  const rating = (val: number) => `${val * 10}%`;
  
  const separator = (index: number, movie: movieType) =>
    index === movie.genres.length - 1 ? '' : ', ';
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <article className='px-3 md:px-10 py-7 w-full xl:w-3/4 h-screen overflow-auto'>
          <ErrorMessage error={error} />
          <Banner poster_path={movie.poster_path} />
          <section className='flex flex-col justify-between md:flex-row my-5 md:gap-5 md:items-center flex-wrap'>
            <h3 className='text-lg font-semibold'>
              <span data-testid='movie-title'>{movie.original_title}</span>:{' '}
              <span>{movie.tagline}</span>{' '}
            </h3>
            <div data-testid='movie-release-date'>
              {getUTCDate(movie.release_date).toUTCString()}
            </div>
            <div>
              Mins: <span data-test-id='movie-runtime'>{movie.runtime}</span>
            </div>
            <div>
              <div className='my-2 flex gap-2'>
                {movie.genres &&
                  movie.genres.slice(0,2).map((genre, i) => (
                    <span
                      key={`${Date.now()}${i}`}
                      className='text-sm rounded-full py-1 px-5 border-2 text-pink-500'
                    >
                      <span>{genre.name}</span>
                      {separator(movie.id, movie)}
                    </span>
                  ))}
              </div>
            </div>
            <div className='flex gap-2'>
              <Image src='/star.svg' alt='star' width={24} height={24} />
              <span>{rating(movie.vote_average)}</span>
            </div>
          </section>
          <section className='flex flex-col md:flex-row w-full'>
            <div className='md:w-3/4'>
              <p className='lg:pr-12' data-testid='movie-overview'>
                {movie.overview}
              </p>
              <CreditsInfo credits={credits} />
              <ActionButtons />
            </div>
            <DetailsSection />
          </section>
        </article>
      )}
    </Fragment>
  );
};

export default Content;