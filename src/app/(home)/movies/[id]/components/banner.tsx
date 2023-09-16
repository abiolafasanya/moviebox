import { movieType } from '@/types/movie';
import Image from 'next/image';

const Banner = ({
  poster_path,
  movie,
}: {
  poster_path: string;
  movie: movieType;
}) => {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w1280';
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const placeHolderImage  ='https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <div className='mb-5 w-full relative overflow-hidden box-border'>
      {movie.videos &&
      movie.videos.results?.length > 0 &&
      movie.videos.results[randomNumber]?.key ? (
        <Video videoKey={movie.videos.results[randomNumber].key} />
      ) : (
        <Image
          width={1080}
          height={550}
          src={poster_path ? posterBaseUrl + poster_path : placeHolderImage}
          alt='movie image'
          className='w-full max-h-[400px] object-cover object-center rounded-lg'
          priority={true}
          data-testid='movie-poster'
        />
      )}
    </div>
  );
};

export default Banner;

const Video = ({ videoKey }: { videoKey: string }) => {
  return (
    <iframe
      width='100%'
      height={550}
      className='w-full max-h-[400px] rounded-lg'
      src={`https://www.youtube.com/embed/${videoKey}`}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
      data-testid='movie-poster'
    />
  );
};
