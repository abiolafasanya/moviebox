import { Genre, TopRated, popularMovieType } from '@/types/movie';
import { formatDate } from '@/utils/formatter';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import MoviesController from '@/app/(home)/hooks/actions';
import Link from 'next/link';

const Card = ({ movie }: { movie: TopRated }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w1280/';
  const [liked, setLiked] = useState(false);
  const rating = (val: number) => `${val * 10}%`;
  const popularity = (val: number) => (Math.round(val / 100) * 10).toFixed(1);

  const fetchGeneres = async () => {
    const data = (await MoviesController.index()).genres;
    setGenres(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchGeneres().then(() => {});
  }, []);

  const mapGenres = (genreId: number[]) =>
    genreId.map((id) => genres.filter((i) => i.id == id)[0]?.name).join(', ');

  return (
    <article className='w-full relative' data-testid='movie-card'>
      <Link href={`/movie/${movie.id}`} className='w-full'>
        <Image
          src={`${posterBaseUrl}${movie.poster_path}`}
          alt=''
          width={250}
          height={300}
          className='w-full object-cover object-center'
          data-testid='movie-poster'
        />
      </Link>
      <div className='absolute top-0 z-10  0 w-full'>
        <div className='flex justify-between items-center my-4 px-2'>
          <span className='rounded-2xl h-8 px-5 bg-white/50 font-medium flex items-center justify-center'>
            Popular
          </span>
          <button className='outline-none rounded-full h-8 w-8 bg-white/50 flex items-center justify-center'>
            <BsFillHeartFill
              className={liked ? 'text-pink-500' : 'text-white/90'}
              onClick={() => setLiked((liked) => !liked)}
            />
          </button>
        </div>
      </div>
      <section>
        <p className='text-sm text-gray-500 my-2 font-semibold space-x-4'>
          <span>Realease Date</span>
          <span data-testid='movie-release-date'>
            {formatDate(
              movie.release_date ? movie.release_date : ''
            )}
          </span>
        </p>
        <h3 className='text-2xl font-semibold my-2' data-testid='movie-title'>
          {movie.title}
        </h3>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2'>
            <Image src='/imdb.svg' alt='imdb logo' width={35} height={17} />
            <span className='text-sm'>
              {Math.round((movie.vote_average / 10) * (movie.vote_count / 100))}
              /100
            </span>
          </div>
          <div className='flex gap-2'>
            <Image src='/fruit.svg' alt='imdb logo' width={16} height={17} />
            <span className='text-sm'>{rating(movie.vote_average)}</span>
          </div>
        </div>
        <h4 className='text-gray-500 font-semibold text-sm my-2'>
          {mapGenres(movie.genre_ids)}
        </h4>
      </section>
    </article>
  );
};

export default Card;
