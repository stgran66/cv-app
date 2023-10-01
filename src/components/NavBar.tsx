import { Button } from './ui/Button';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { useEffect } from 'react';

export default function useScrollToHash() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }, []);
}

export const NavBar = () => {
  const location = useLocation();
  useScrollToHash();
  return (
    <nav className='flex justify-between'>
      <ul className='flex items-center gap-20'>
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
          {/* TODO Fix scroll on reload and pasting link */}
          <HashLink smooth to='#comments' state={{ from: location }}>
            <Button buttonStyle='light'>Comments</Button>
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};
