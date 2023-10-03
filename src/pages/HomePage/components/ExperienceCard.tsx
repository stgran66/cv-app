import { getMonthYear, getCompanyIcon, getCompanyTitle } from 'utils';

interface ExperienceCardProps {
  id: number;
  from: string;
  to: string;
  description: string;
  company: string;
}

export const ExperienceCard = ({
  id,
  company,
  from,
  to,
  description,
}: ExperienceCardProps) => {
  return (
    <li className='p-9 shadow-card basis-[calc((100%/2)-15px)]'>
      <div className='flex items-center gap-6'>
        <div className='w-7 h-7 bg-accent flex justify-center items-center'>
          {getCompanyIcon(id)}
        </div>
        <div>
          <p className='text-l leading-s'>{company}</p>
          <p className='text-s leading-s text-textSecondary'>
            {getMonthYear(from)} - {getMonthYear(to)}
          </p>
        </div>
      </div>
      <h3 className='text-xl font-semibold leading-s capitalize mt-6'>
        {getCompanyTitle(id)}
      </h3>
      <p className='mt-4 leading-m text-textDesc'>{description}</p>
    </li>
  );
};
