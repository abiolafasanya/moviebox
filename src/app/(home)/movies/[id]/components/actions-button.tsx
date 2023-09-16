import { PiCaretDownBold } from "react-icons/pi";

const ActionButtons = () => {
  return (
    <div className='flex flex-col gap-2 md:gap-0 md:flex-row md:border-2 md:rounded-lg bg-white my-5'>
      <button className='outline-none bg-pink-500 text-pink-50 py-3 md:w-1/4 rounded-lg'>
        Top rated Movie
      </button>
      <button className='outline-none rounded-lg md:rounded-none py-3 sm:border-2 md:border-none md:w-3/4 flex justify-between px-5 items-center'>
        <span>Awards 9 Nomination</span>
        <PiCaretDownBold />
      </button>
    </div>
  );
};

export default ActionButtons;
