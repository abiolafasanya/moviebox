import Image from 'next/image';

const Loader = ({message = 'Loading...'}: {message?: string}) => {
  return (
    <div className='flex flex-col h-screen w-full items-center justify-center'>
      <div className='flex gap-4'>
        <Image
          src={'/tv.svg'}
          width={24}
          height={24}
          alt=''
          className='animate-bounce transition ease-in-out delay-1000'
        />
        <Image
          src={'/tv.svg'}
          width={24}
          height={24}
          alt=''
          className='animate-bounce transition ease-in-out delay-700'
        />
        <Image
          src={'/tv.svg'}
          width={24}
          height={24}
          alt=''
          className='animate-bounce transition ease-in-out delay-500'
        />
      </div>
      <h2 className='text-4xl text-center font-semibold text-pink-500'>
        {message}
      </h2>
    </div>
  );
};

export default Loader;
