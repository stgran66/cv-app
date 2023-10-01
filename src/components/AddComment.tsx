import { CommentForm } from './CommentForm';

export const AddCommentSection = () => {
  return (
    <section className='py-[130px] flex w-[1170px] mx-auto justify-center'>
      <div className='w-[40%]'>
        <h2 className='text-[36px] leading-[46px] capitalize font-semibold'>
          Add comment
        </h2>
        <span
          className='block w-[70px] h-[1px] bg-slate-300 mt-[10px]'
          aria-hidden='true'
        />
        <span
          className='block w-[35px] h-[1px] bg-slate-300 mt-[5px]'
          aria-hidden='true'
        />
        <CommentForm />
      </div>
    </section>
  );
};
