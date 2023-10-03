import { useComment } from 'hooks';
import { PAGE_SIZE } from 'data';
import { Pagination, Sorting } from 'components/ui';
import { CommentCard } from 'components/layout';

export const CommentsSection = () => {
  const {
    comments,
    sorting,
    onSortingChange,
    currentPage,
    onPageChange,
    totalCount,
  } = useComment();

  return (
    <section id='comments' className='py-sectionPadding  w-container mx-auto '>
      <div className='flex justify-between  w-[40%] mx-auto items-center flex-wrap'>
        <h2 className='text-xl leading-m capitalize font-semibold'>comments</h2>
        <Sorting onSortingChange={onSortingChange} sorting={sorting} />

        <ul className='basis-[100%] '>
          {comments &&
            comments.map(comment => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
        </ul>
        <Pagination
          totalCount={totalCount}
          onPageChange={page => onPageChange(page)}
          siblingCount={1}
          currentPage={currentPage}
          limit={PAGE_SIZE}
        />
      </div>
    </section>
  );
};
