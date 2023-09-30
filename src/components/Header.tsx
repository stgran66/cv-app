import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { NavBar } from './NavBar';

export const Header = () => {
  return (
    <header className='flex justify-between py-[70px]'>
      <Logo />
      <NavBar />
    </header>
  );
};
