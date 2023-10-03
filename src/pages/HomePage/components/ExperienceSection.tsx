import { useExperience } from '../hooks';
import { ExperienceCard } from './';

export const ExperienceSection = () => {
  const experiences = useExperience();

  return (
    <section className='py-[130px] flex w-[1170px] mx-auto flex-col items-center'>
      <p className='text-accent text-[24px] leading-[30px] font-bold uppercase'>
        Qualification
      </p>
      <h2 className='section-header'>My Experience</h2>
      <p className='leading-[28px] mt-5 max-w-[740px] text-center'>
        It is a long established fact that a reader will be distracted of a page
        when looking at its layout. The point of using Lorem Ipsum is tha it has
      </p>
      <ul className='flex mt-[80px] gap-[30px] flex-wrap '>
        {experiences.map(({ id, company, from, to, description }) => (
          <ExperienceCard
            key={id}
            id={id}
            company={company}
            from={from}
            to={to}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};
