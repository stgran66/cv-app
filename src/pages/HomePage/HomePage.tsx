import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';

const HomePage = () => {
  return (
    <>
      <div className='bg-bgSecondary'>
        <ServicesSection />
      </div>
      <ExperienceSection />
    </>
  );
};

export default HomePage;
