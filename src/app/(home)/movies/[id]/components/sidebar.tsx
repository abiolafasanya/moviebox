'use client';
import Image from 'next/image';
import { GoSignOut } from 'react-icons/go';
import SideBarMenu from './sidebar-menu';

const SideBar = ({
  current,
  action,
}: {
  current: number;
  action: (val: number) => void;
}) => {
  return (
    <aside className='border-r-2 border-solid h-screen rounded-r-[3.5rem] md:w-64 flex justify-between flex-col'>
      <div className='flex gap-2 items-center p-5'>
        <Image src={'/tv.svg'} width={36} height={36} alt='logo' />
        <h3 className='sm:hidden md:block font-semibold'>Movie Box</h3>
      </div>
      <SideBarMenu action={action} current={current} />
      <article className='sm:hidden md:block border-2 rounded-lg border-pink-500 py-4 px-4 mx-5'>
        <h3 className='font-semibold text-sm'>
          Play movie quizes and earn free tickets
        </h3>
        <p className='text-[13px] mt-2 text-gray-600'>
          50k People are playing now
        </p>
        <button className='py-2 px-5 my-2 rounded-2xl text-pink-500 bg-pink-200 text-sm'>
          Start Playing
        </button>
      </article>
      <div className='flex gap-x-2 p-5'>
        <GoSignOut size={24} />
        <span className='hidden md:block'>Log out</span>
      </div>
    </aside>
  );
};

export default SideBar;
