import { articles } from 'data';

export const ArticlesSection = ({ title }: { title: string }) => {
  return (
    <section className='py-sectionPadding  w-container mx-auto flex flex-col items-center '>
      <p className='text-2xl leading-l text-accent uppercase font-bold'>
        {title}
      </p>
      <h2 className='text-3xl leading-2xl font-semibold mb-4'>Lorem Ipsum</h2>
      <div className='mt-[-10px] flex flex-wrap justify-between'>
        {articles.map((article, idx) => (
          <p key={idx} className='basis-[48%] m-3'>
            {article}
          </p>
        ))}
      </div>
    </section>
  );
};
