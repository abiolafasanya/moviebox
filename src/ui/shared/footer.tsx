import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='h-full w-full bg-white pt-20 pb-10 text-black'>
      <div className='container mx-auto w-full flex flex-col gap-10 items-center justify-center py-5 h-full'>
        <div className='flex gap-7'>
          <FaFacebookSquare size={24} />
          <BsInstagram size={24} />
          <FaTwitter size={24} />
          <BsYoutube size={24} />
        </div>
        <div className='flex gap-2 text-center md:text-start md:gap-10 flex-col md:flex-row text-black'>
          <Link href={'#terms'}>Conditions of Use</Link>
          <Link href={'#privacy'}>Privacy & Policy</Link>
          <Link href={'#press-room'}>Press Room</Link>
        </div>
        <p className='text-sm text-gray-500 font-semibold'>
          © 2023 MovieBox by Abiola Fasanya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
