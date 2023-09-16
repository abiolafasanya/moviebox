'use client';
import Image from 'next/image';
import Link from 'next/link';

interface NotFoundProps {
  error: Error;
  reset: () => void;
}

export default function NotFound({ error, reset }: NotFoundProps) {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full text-black'>
      <Image
        src={'/404.gif'}
        width={300}
        height={300}
        alt='error'
        className='rounded-full'
      />
      <h1>{error?.message || 'Page not found'}</h1>
      <div className='flex items-center justify-center gap-4'>
        <button
          className='border-2 border-pink-500 px-5 py-3 my-5 rounded-lg outline-none'
          onClick={reset}
        >
          Try again
        </button>
        <Link
          href={'/'}
          className='rounded-lg py-3 px-5  bg-pink-500 text-white fibt-semibold'
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
