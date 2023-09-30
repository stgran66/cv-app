import { Button } from './ui/Button';

export const NavBar = () => {
  return (
    <nav className='flex justify-between'>
      <ul className='flex items-center gap-20'>
        <li>Home</li>
        <li>Services</li>
        <li>Experience</li>
        <li>
          <Button buttonStyle='light'>Comments</Button>
        </li>
      </ul>
    </nav>
  );
};
