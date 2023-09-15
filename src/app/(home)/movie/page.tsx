"use client"
import Loader from '@/ui/shared/loader';
import { useRouter } from 'next/navigation';

const MoviePageRedirect = () => {
  const router = useRouter();
  const REDIRECT = true
  if(REDIRECT) {
      router.push('/');
  }
  return <Loader message='Redirecting' />;
};

export default MoviePageRedirect;
