import { useExperience } from '../hooks';
import { ExperienceCard } from './';

export const ExperienceSection = () => {
  const experiences = useExperience();

  return (
    <section className='py-sectionPadding flex w-container mx-auto flex-col items-center'>
      <p className='text-accent text-2xl leading-l font-bold uppercase'>
        Qualification
      </p>
      <h2 className='section-header'>My Experience</h2>
      <p className='leading-m] mt-5 max-w-sectionTextContainer text-center'>
        It is a long established fact that a reader will be distracted of a page
        when looking at its layout. The point of using Lorem Ipsum is tha it has
      </p>
      <ul className='flex mt-12 gap-6 flex-wrap '>
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
