import { Header } from '../Header';
import { HeroSection } from '../Hero';
import { CommentsSection } from '../Comments';
import { Footer } from '../Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

interface CommonLayoutProps {
  children?: React.ReactNode;
}

export const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <div className='min-h-[100vh] bg-bgPrimary'>
      <div
        className={`h-[980px] bg-[url('./assets/images/hero-bg-image.png'),_url('./assets/images/hero-bg.png')] bg-no-repeat 
        bg-[position:right_169px_bottom,_left_top]`}
      >
        <Header />
        <HeroSection />
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
      <CommentsSection />
      <div className='bg-accent'>
        <Footer />
      </div>
    </div>
  );
};
