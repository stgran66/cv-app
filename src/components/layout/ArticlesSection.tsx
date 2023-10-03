import { articles } from 'data';

export const ArticlesSection = ({ title }: { title: string }) => {
  return (
    <section className='py-[130px]  w-[1170px] mx-auto flex flex-col items-center '>
      <p className='text-[24px] leading-[30px] text-accent uppercase font-bold'>
        {title}
      </p>
      <h2 className='text-[36px] leading-[46px] font-semibold mb-[20px]'>
        Lorem Ipsum
      </h2>
      <div className='mt-[-10px] flex flex-wrap justify-between'>
        {articles.map((article, idx) => (
          <p key={idx} className='basis-[48%] m-[10px]'>
            {article}
          </p>
        ))}
      </div>
    </section>
  );
};
