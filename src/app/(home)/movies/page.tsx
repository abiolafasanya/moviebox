'use client';
import Loader from '@/ui/shared/loader';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const MoviePageRedirect = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);
  return <Loader message='Redirecting' />;
};

export default MoviePageRedirect;
