import { useService } from '../hooks';
import { ServiceCard } from './';

export const ServicesSection = () => {
  const services = useService();

  return (
    <section className='py-[130px] w-[1170px] mx-auto flex flex-col items-center'>
      <p className='text-accent text-[24px] leading-[30px] font-bold uppercase'>
        What we do
      </p>
      <h2 className='section-header'>Better Services for you</h2>
      <p className='leading-[28px] mt-5 max-w-[740px] text-center'>
        It is a long established fact that a reader will be distracted of a page
        when looking at its layout. The point of using Lorem Ipsum is tha it has
      </p>
      <ul className='flex mt-[80px] gap-[80px]'>
        {services &&
          services.length > 0 &&
          services.map(service => (
            <ServiceCard service={service} key={service.id} />
          ))}
      </ul>
    </section>
  );
};
