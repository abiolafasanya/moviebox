'use client';
import { useState } from 'react';
import Content from './components/content';
import SideBar from './components/sidebar';
import { useRouter } from 'next/navigation';
import { ServerExceptionError } from '@/libs/exceptions';
import useMovies from '../../hooks/useMovies';

const DetailPage = () => {
  const { error } = useMovies();
  if (error) throw new ServerExceptionError(error);
  const [current, setCurrent] = useState(1);
  const router = useRouter();
  if (current == 0) {
    current == 0 && router.push('/');
  }
  function handleCurrent(current: number) {
    setCurrent(current);
  }
  return (
    <main className='dark:text-black w-full bg-white h-screen overflow-hidden max-w-[1440px] mx-auto'>
      <div className='flex w-full h-full'>
        <SideBar current={current} action={handleCurrent} />

        {current == 1 ? <Content /> : null}
        {current > 1 ? (
          <div className='px-5 md:px-0 flex w-full items-center justify-center text-4xl font-semibold text-pink-500'>
            Feature is coming soon!
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default DetailPage;
