import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Button } from './Button';

export const NavBar = () => {
  return (
    <nav className='flex justify-between'>
      <ul className='flex items-center gap-13'>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-accent' : '')}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-accent' : '')}
            to='services'
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-accent' : '')}
            to='experience'
          >
            Experience
          </NavLink>
        </li>
        <li>
          <HashLink smooth to='#comments'>
            <Button buttonStyle='light'>Comments</Button>
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};
