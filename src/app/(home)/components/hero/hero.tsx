'use client';
import Image from 'next/image';
import Navigation from './navigation';
import Content from './content';
import { useEffect, useState } from 'react';
import { TopRated } from '@/types/movie';
import MovieController from '@/app/(home)/hooks/actions';

const Hero = () => {
  const [rated, setRated] = useState<TopRated | null>(null);
  const[ index, setIndex] = useState(() => Math.floor(Math.random() * 20) + 1);
  async function fetchRatedMovies(index: number) {
    const data = (await MovieController.index()).rated;
    setRated(data[index]);
  }
  useEffect(() => {
    fetchRatedMovies(index).then(() => {});
  }, [index]);
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w1280';
  return (
    <div className='section relative h-screen max-h-screen '>
      <Image
        src={
          rated?.poster_path ? posterBaseUrl + rated.poster_path : '/Poster.svg'
        }
        alt='hero image'
        width={1080}
        height={1080}
        className='block relative w-full sm:h-screen h-full md:min-h-full object-center object-cover'
      />
      <div className='absolute left-0 right-0 bottom-0 top-0 z-50 bg-black/50 w-full h-full'>
        <div className='max-w-[1440px] container flex flex-col items-center mx-auto  w-full h-full'>
          <Navigation />
          <Content rated={rated} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
