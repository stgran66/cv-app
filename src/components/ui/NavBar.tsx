import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Button } from './Button';

export const NavBar = () => {
  return (
    <nav className='flex justify-between'>
      <ul className='flex items-center gap-13'>
        <li className='hover:text-accent transition-all duration-200'>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-accent' : '')}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li className='hover:text-accent transition-all duration-200'>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-accent' : '')}
            to='services'
          >
            Services
          </NavLink>
        </li>
        <li className='hover:text-accent transition-all duration-200'>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-accent' : '')}
            to='experience'
          >
            Experience
          </NavLink>
        </li>
        <li>
          <HashLink smooth to='#comments'>
            <Button>Comments</Button>
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};
