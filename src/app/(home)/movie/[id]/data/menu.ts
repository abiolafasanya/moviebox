import { GoHome } from 'react-icons/go';
import { BiCameraMovie } from 'react-icons/bi';
import { BsFillPlayBtnFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';

export const menus = [
    { id: 1, name: 'Home', url: '/', pathname: 'movies', icon: GoHome },
    {
      id: 2,
      name: 'Movies',
      url: '#movies',
      pathname: 'movies',
      icon: BiCameraMovie,
    },
    {
      id: 3,
      name: 'Tv Series',
      url: '#tv-series',
      pathname: 'tv-series',
      icon: BsFillPlayBtnFill,
    },
    {
      id: 3,
      name: 'Upcoming',
      url: '#upcoming',
      pathname: 'upcoming',
      icon: AiOutlineCalendar,
    },
  ];

  export type MenuType = typeof menus[0]