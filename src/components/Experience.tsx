import { useState, useEffect } from 'react';

import { ReactComponent as DribbleIcon } from '../assets/images/icons/dribble.svg';
import { ReactComponent as BehanceIcon } from '../assets/images/icons/behance.svg';

const icons: Record<string, React.ReactNode> = {
  Behancer: <BehanceIcon />,
  Dribbble: <DribbleIcon />,
  Themforest: <BehanceIcon />,
};

const getIcon = (str: string) => {
  const icon = icons[str];
  if (!icon) {
    return null;
  }
  return icon;
};

const getMonthYear = (date: string) => {
  const dateObj = new Date(date);
  const displayDate = dateObj.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });
  return displayDate;
};

interface Experience {
  id: number;
  company: string;
  description: string;
  from: string;
  to: string;
}

async function getData() {
  const data = await fetch(
    'https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/experience'
  );
  const parsedData = await data.json();
  return parsedData;
}

export const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<Experience[] | []>([]);
  useEffect(() => {
    async function getExperiences() {
      const data = await getData();
      setExperiences(data);
    }
    getExperiences();
  }, []);

  return (
    <section className='py-[130px] flex w-[1170px] mx-auto flex-col items-center'>
      <p className='text-accent text-[24px] leading-[30px] font-bold uppercase'>
        Qualification
      </p>
      <h2 className='text-[36px] leading-[46px] capitalize font-semibold'>
        My Experience
      </h2>
      <p className='leading-[28px] mt-5 max-w-[740px] text-center'>
        It is a long established fact that a reader will be distracted of a page
        when looking at its layout. The point of using Lorem Ipsum is tha it has
      </p>
      <ul className='flex mt-[80px] gap-[30px] flex-wrap '>
        {experiences.map(experience => (
          <li
            key={experience.id}
            className='p-[50px] shadow-2xl basis-[calc((100%/2)-15px)]'
          >
            <div className='flex items-center gap-[30px]'>
              <div className='w-[40px] h-[40px] bg-accent flex justify-center items-center'>
                {getIcon(experience.company)}
              </div>

              <div>
                <p className='text-[18px] leading-[24px]'>
                  {experience.company}
                </p>
                <p className='text-[14px] leading-[24px] text-[#777777]'>
                  {getMonthYear(experience.from)} -{' '}
                  {getMonthYear(experience.to)}
                </p>
              </div>
            </div>
            {/* TODO create object which binds title by experience id */}
            <h3 className='text-[20px] font-semibold leading-[24px] capitalize mt-[30px]'>
              title
            </h3>
            <p className='mt-[20px] leading-[28px] text-[#e8e1e1]'>
              {experience.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
