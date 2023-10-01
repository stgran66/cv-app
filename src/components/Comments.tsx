import { useState, useEffect } from 'react';
import { Pagination } from './ui/Pagination';
import { fetchComments } from '../services/api';

const PAGE_SIZE = 4;

interface Comment {
  id: string;
  content: string;
  email: string;
  createdAt: string;
  name: string;
}

export const CommentsSection = () => {
  const [comments, setComments] = useState<Comment[] | []>([]);
  const [sorting, setSorting] = useState('newest');
  // TODO get page from searchParams
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function getComments() {
      const sortingOrder = sorting === 'newest' ? 'desc' : 'asc';
      const data = await fetchComments(currentPage, PAGE_SIZE, sortingOrder);
      setComments(data);
    }
    getComments();
  }, [sorting, currentPage]);

  useEffect(() => {
    async function getCommentsTotalCount() {
      const data = await fetchComments();
      setTotalCount(data.length);
    }
    getCommentsTotalCount();
  }, []);

  return (
    <section id='comments' className='py-[130px]  w-[1170px] mx-auto '>
      <div className='flex justify-between  w-[40%] mx-auto items-center flex-wrap'>
        <h2 className='text-[20px] leading-[28px] capitalize font-semibold'>
          Comments
        </h2>
        <div className='text-[12px]'>
          <button
            className={`${sorting === 'newest' ? null : 'text-accent'}`}
            onClick={() => setSorting('oldest')}
          >
            oldest
          </button>{' '}
          |{' '}
          <button
            className={`${sorting === 'newest' ? 'text-accent' : null}`}
            onClick={() => setSorting('newest')}
          >
            newest
          </button>
        </div>

        <ul className='basis-[100%] '>
          {comments &&
            comments.map(comment => (
              <li key={comment.id}>
                <p className='text-[14px] leading-[24px] text-[#777777] mt-[40px]'>
                  {comment.createdAt}
                </p>
                <h3 className='text-[20px] font-semibold leading-[24px] mt-[10px]'>
                  <span className='capitalize'>{comment.name}</span>{' '}
                  {comment.email}
                </h3>
                <p className='mt-[10px]'>{comment.content}</p>
              </li>
            ))}
        </ul>
        <Pagination
          totalCount={totalCount}
          onPageChange={page => setCurrentPage(page)}
          siblingCount={1}
          currentPage={currentPage}
          limit={PAGE_SIZE}
        />
      </div>
    </section>
  );
};
