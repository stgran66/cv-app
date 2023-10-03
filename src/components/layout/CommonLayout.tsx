import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Header,
  HeroSection,
  CommentsSection,
  Footer,
  AddCommentSection,
} from 'components/layout';

export const CommonLayout = () => {
  return (
    <div className='min-h-[100vh] bg-bgPrimary'>
      <div className='hero-bg'>
        <Header />
        <HeroSection />
      </div>
      <div className='bg-bgSecondary'>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <CommentsSection />
      <AddCommentSection />
      <div className='bg-accent'>
        <Footer />
      </div>
    </div>
  );
};
