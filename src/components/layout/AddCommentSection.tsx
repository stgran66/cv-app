import { CommentForm } from 'components/ui';

export const AddCommentSection = () => {
  return (
    <section className='py-sectionPadding flex w-container mx-auto justify-center'>
      <div className='w-[40%]'>
        <h2 className='section-header'>Add comment</h2>
        <span className='block w-11 h-1 bg-slate-300 mt-3' aria-hidden='true' />
        <span
          className='block w-[35px] h-1 bg-slate-300 mt-2'
          aria-hidden='true'
        />
        <CommentForm />
      </div>
    </section>
  );
};
