import type { Service } from 'types/shared';
import { getServiceIcon } from 'utils';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { id, name, description } = service;
  return (
    <li className='flex flex-col items-center'>
      <div className='bg-accent rounded-full w-13 h-13 flex justify-center items-center'>
        {getServiceIcon(Number(id))}
      </div>
      <h3 className='text-3xl leading-2xl font-semibold mt-[30px]'>{name}</h3>
      <p className='leading-m mt-5 text-center'>{description}</p>
    </li>
  );
};
