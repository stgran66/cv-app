import { ServicesSection } from '../components/Services';
import { ExperienceSection } from '../components/Experience';

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
