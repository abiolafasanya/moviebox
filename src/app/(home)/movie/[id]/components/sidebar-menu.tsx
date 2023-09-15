import { menus } from '../data/menu';

interface MenuProps {
  current: number;
  action: (val: number) => void;
}
const SideBarMenu = ({ action, current }: MenuProps) => {
  return (
    <menu className=' space-y-2'>
      {menus.map((menu, index) => (
        <button
          key={index}
          className={`flex gap-2 px-5 p-3 w-full ${
            index === current
              ? 'border-r-4 border-pink-500 bg-pink-200 text-pink-500'
              : ''
          }`}
          onClick={() => action(index)}
        >
          <menu.icon size={24} />
          <span className='sm:hidden md:block'>{menu.name}</span>
        </button>
      ))}
    </menu>
  );
};

export default SideBarMenu;
