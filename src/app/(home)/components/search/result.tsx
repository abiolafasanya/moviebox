import React from 'react';
import { popularMovieType } from '@/types/movie';
import Image from 'next/image';
import { formatDate } from '@/utils/formatter';

interface Props {
  result: popularMovieType;
}

const SearchResult = ({ result }: Props) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w45/';

  return (
    <div className='flex items-center gap-1 py-2 px-5 transition ease-in-out rounded-md hover:bg-white sm:bg-white md:bg-white/70 w-full'>
      {result.poster_path ? (
        <Image
          src={result.poster_path && imageUrl + result.poster_path}
          alt='MV'
          width={24}
          height={24}
          className='rounded-full w-6 h-6'
        />
      ) : (
        <Image
          src='https://via.placeholder.com/50x75/111827/000000'
          alt=''
          className='shrink-0 rounded-full w-6 h-6'
          width={24}
          height={24}
        />
      )}
      <div className='flex overflow-hidden flex-col pl-3'>
        <span className='whitespace-nowrap overflow-hidden text-ellipsis text-sm'>
          {result.title}
        </span>
        <span className='whitespace-nowrap text-xs text-pink-500 overflow-hidden text-ellipsis'>
          {formatDate(result.release_date)}
        </span>
      </div>
    </div>
  );
};

export default SearchResult;
