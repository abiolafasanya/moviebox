import Link from 'next/link';
import SearchResult from './result';
import { TopRated, popularMovieType } from '@/types/movie';

interface DropdownProps {
  result: TopRated[];
  errorMessage: string;
  loading: boolean;
}
const SearchDropdown = ({ result, errorMessage, loading }: DropdownProps) => {
  return (
    <div className='absolute flex left-0 w-full top-12 text-black px-0'>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col gap-1 items-center justify-center w-full shadow-sm'>
          {Array.isArray(result) && result.length > 0 ? (
            result.map((search) => (
              <Link key={search.id} href={`/movies/${search.id}`} className='w-full'>
                <SearchResult key={search.id} result={search} />
              </Link>
            ))
          ) : (
            <NotFound errorMessage={errorMessage} />
          )}
        </div>
      )}
    </div>
  );
};

const Loading = () => (
  <p className='flex items-center text-sm gap-1 py-3 px-5 rounded-md bg-white/70  w-full'>
    searching...
  </p>
);

const NotFound = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <>
      {errorMessage ? (
        <p className='flex items-center gap-1 py-3 px-5 rounded-md bg-white/70  w-full"'>
          {errorMessage}
        </p>
      ) : null}
    </>
  );
};

export default SearchDropdown;
