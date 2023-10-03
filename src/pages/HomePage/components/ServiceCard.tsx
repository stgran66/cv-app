import type { Service } from 'types/shared';
import { getServiceIcon } from 'utils';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { id, name, description } = service;
  return (
    <li className='flex flex-col items-center'>
      <div className='bg-accent rounded-full w-[100px] h-[100px] flex justify-center items-center'>
        {getServiceIcon(Number(id))}
      </div>
      <h3 className='text-[36px] leading-[46px] font-semibold mt-[30px]'>
        {name}
      </h3>
      <p className='leading-[28px] mt-5 text-center'>{description}</p>
    </li>
  );
};
