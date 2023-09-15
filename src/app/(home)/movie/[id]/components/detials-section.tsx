import { TfiMenuAlt } from 'react-icons/tfi';
import { IoTicket } from 'react-icons/io5';
import Image from 'next/image';
import useMovies from '../../../hooks/useMovies';
import Link from 'next/link';

const DetailsSection = () => {
  const { movies } = useMovies();
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w1280/';
  return (
    <div className='md:w-[35%]'>
      <div className='flex flex-col gap-3'>
        <button className='flex items-center justify-center gap-2 px-5 py-2 rounded-md outline-none bg-pink-500 text-pink-50'>
          <IoTicket /> <span>See Showtime</span>
        </button>
        <button className='flex items-center justify-center gap-2 px-5 py-2 rounded-md outline-none bg-pink-200'>
          <TfiMenuAlt /> <span> More Watch Option</span>
        </button>
      </div>
      <div className='flex mt-5 gap-1 rounded-lg overflow-hidden relative'>
        {movies
          .slice(0, 3)
          .map((movie) => (
            <Link key={movie.id} href={`/${movie.id}/`}>
              <div className='max-h-64 w-full overflow-hidden'>
                <Image
                  src={
                    movie.backdrop_path
                      ? `${posterBaseUrl}${movie.backdrop_path}`
                      : '/Poster.svg'
                  }
                  width={300}
                  height={300}
                  alt={movie.original_title}
                  className='w-full h-[250px] object-cover object-center'
                />
              </div>
            </Link>
          ))}

        <div className='w-full absolute bottom-0 py-3 px-5 bg-black/50 text-white gap-3 flex items-center'>
          <TfiMenuAlt /> <span> The Best Movies and Shows</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
