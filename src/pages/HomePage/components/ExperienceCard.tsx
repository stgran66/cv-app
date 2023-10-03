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
    <li className='p-[50px] shadow-card basis-[calc((100%/2)-15px)]'>
      <div className='flex items-center gap-[30px]'>
        <div className='w-[40px] h-[40px] bg-accent flex justify-center items-center'>
          {getCompanyIcon(id)}
        </div>
        <div>
          <p className='text-[18px] leading-[24px]'>{company}</p>
          <p className='text-[14px] leading-[24px] text-[#777777]'>
            {getMonthYear(from)} - {getMonthYear(to)}
          </p>
        </div>
      </div>
      <h3 className='text-[20px] font-semibold leading-[24px] capitalize mt-[30px]'>
        {getCompanyTitle(id)}
      </h3>
      <p className='mt-[20px] leading-[28px] text-[#e8e1e1]'>{description}</p>
    </li>
  );
};
