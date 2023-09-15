import { TopRated } from '@/types/movie';
import Image from 'next/image';
import { Fragment } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import Demo from './demo';

const Content = ({ rated }: { rated: TopRated | null }) => {
  const rating = (val: number) => `${val * 10}%`;
  return (
    <Fragment>
      {!rated ? (
        <Demo />
      ) : (
        <div className='container mx-auto w-full h-full'>
          <div className='w-full h-full grid grid-cols-1 place-content-center max-w-[420px] gap-5'>
            <h2
              className='sm:text-2xl md:text-4xl lg:text-5xl leading-tight font-semibold text-white'
            >
              {rated.original_title}
            </h2>
            <section className='lg:my-5 flex gap-6 w-full'>
              <div className='flex gap-2 text-white'>
                <Image src='/imdb.svg' alt='imdb logo' width={35} height={17} />
                <span className='text-sm text-white/80'>
                  {(rated.vote_average / 10) * 100}/100
                </span>
              </div>
              <div className='flex gap-2 text-white'>
                <Image
                  src='/fruit.svg'
                  alt='imdb logo'
                  width={16}
                  height={17}
                />
                <span className='text-sm text-white/80'>
                  {rating(rated.vote_average)}
                </span>
              </div>
            </section>
            <p className='text-white text-base'>
              {rated.overview}
            </p>
            <div className='flex w-full'>
              <button className='bg-pink-700 text-white rounded-md py-3 px-7 flex gap-3 items-center'>
                <FaPlayCircle />
                Watch trailer
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Content;
