import { ReactComponent as Logo } from 'assets/images/icons/logo.svg';
import { NavBar } from 'components/ui';

export const Header = () => {
  return (
    <header className='w-[1170px] mx-auto flex justify-between py-[70px]'>
      <Logo />
      <NavBar />
    </header>
  );
};
