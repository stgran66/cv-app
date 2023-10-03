import { useService } from 'pages/HomePage/hooks';
import { ServiceCard } from 'pages/HomePage/components';

export const ServicesSection = () => {
  const services = useService();

  return (
    <section className='py-sectionPadding w-container mx-auto flex flex-col items-center'>
      <p className='text-accent text-2xl leading-l font-bold uppercase'>
        What we do
      </p>
      <h2 className='section-header'>Better Services for you</h2>
      <p className='leading-m mt-5 max-w-sectionTextContainer text-center'>
        It is a long established fact that a reader will be distracted of a page
        when looking at its layout. The point of using Lorem Ipsum is tha it has
      </p>
      <ul className='flex mt-12 gap-12'>
        {services &&
          services.length > 0 &&
          services.map(service => (
            <ServiceCard service={service} key={service.id} />
          ))}
      </ul>
    </section>
  );
};
