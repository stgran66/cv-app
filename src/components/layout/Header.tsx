import { ReactComponent as Logo } from 'assets/images/icons/logo.svg';
import { NavBar } from 'components/ui';

export const Header = () => {
  return (
    <header className='w-container mx-auto flex justify-between py-11'>
      <Logo />
      <NavBar />
    </header>
  );
};
