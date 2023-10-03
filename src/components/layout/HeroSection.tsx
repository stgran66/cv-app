import { designations } from 'data/designations';

export const HeroSection = () => {
  return (
    <section className='pt-[200px] w-[1170px] mx-auto'>
      <p className='text-[20px]'>Hello!</p>
      <h1 className='text-[60px] font-bold'>
        I am <span className='text-accent'>HRS </span>
        Pathan <br /> Creative UI/UX Designer
      </h1>
      <ol className='list-decimal list-inside mt-[55px]'>
        {designations.map(designation => (
          <li className='leading-[38px]'>{designation}</li>
        ))}
      </ol>
    </section>
  );
};
