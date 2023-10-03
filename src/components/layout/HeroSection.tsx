import { designations } from 'data/designations';

export const HeroSection = () => {
  return (
    <section className='pt-heroPadding w-container mx-auto'>
      <p className='text-xl'>Hello!</p>
      <h1 className='text-4xl font-bold'>
        I am <span className='text-accent'>HRS </span>
        Pathan <br /> Creative UI/UX Designer
      </h1>
      <ol className='list-decimal list-inside mt-[55px]'>
        {designations.map(designation => (
          <li key={designation} className='leading-xl'>
            {designation}
          </li>
        ))}
      </ol>
    </section>
  );
};
