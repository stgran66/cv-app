import { useEffect, useState } from 'react';
import { ReactComponent as ResponsiveIcon } from '../assets/images/icons/pc.svg';
import { ReactComponent as DesignerIcon } from '../assets/images/icons/heart.svg';
import { ReactComponent as SupportIcon } from '../assets/images/icons/support.svg';

const icons: Record<string, React.ReactNode> = {
  'fully responsive': <ResponsiveIcon />,
  'ui/ux designer': <DesignerIcon />,
  '24/7 support': <SupportIcon />,
};

const getIcon = (str: string) => {
  const icon = icons[str];
  if (!icon) {
    return null;
  }
  return icon;
};

interface Service {
  id: string;
  name: string;
  description: string;
}

async function getData() {
  const data = await fetch(
    'https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/services'
  );
  const parsedData = await data.json();
  return parsedData;
}

export const ServicesSection = () => {
  const [services, setServices] = useState<Service[] | []>([]);
  useEffect(() => {
    async function getServices() {
      const data = await getData();
      setServices(data);
    }
    getServices();
  }, []);
  return (
    <section className='py-[130px] w-[1170px] mx-auto flex flex-col items-center'>
      <p className='text-accent text-[24px] leading-[30px] font-bold uppercase'>
        What we do
      </p>
      <h2 className='text-[36px] leading-[46px] capitalize font-semibold'>
        Better Services for you
      </h2>
      <p className='leading-[28px] mt-5 max-w-[740px] text-center'>
        It is a long established fact that a reader will be distracted of a page
        when looking at its layout. The point of using Lorem Ipsum is tha it has
      </p>
      <ul className='flex mt-[80px] gap-[80px]'>
        {services.length > 0 &&
          services.map(service => (
            <li key={service.id} className='flex flex-col items-center'>
              <div className='bg-accent rounded-full w-[100px] h-[100px] flex justify-center items-center'>
                {getIcon(service.name)}
              </div>
              <h3 className='text-[36px] leading-[46px] font-semibold mt-[30px]'>
                {service.name}
              </h3>
              <p className='leading-[28px] mt-5 text-center'>
                {service.description}
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
};
