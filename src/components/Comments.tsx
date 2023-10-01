import { useState, useEffect } from 'react';
import { PaginationButton } from './ui/PaginationButton';

async function getData(order: string, page: number) {
  const queryString = `orderby=createdAt&order=${order}&limit=4&page=${page}`;
  const data = await fetch(
    `https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/comments?${queryString}`
  );
  const parsedData = await data.json();
  return parsedData;
}

interface Comment {
  id: string;
  content: string;
  email: string;
  createdAt: string;
  name: string;
}

export const CommentsSection = () => {
  const [comments, setComments] = useState<Comment[] | []>([]);
  const [activeSorting, setActiveSorting] = useState('newest');
  // TODO get page from searchParams
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function getComments() {
      const sortingOrder = activeSorting === 'newest' ? 'desc' : 'asc';
      const data = await getData(sortingOrder, currentPage);
      setComments(data);
    }
    getComments();
  }, [activeSorting, currentPage]);

  return (
    <section id='comments' className='py-[130px]  w-[1170px] mx-auto '>
      <div className='flex justify-between  w-[40%] mx-auto items-center flex-wrap'>
        <h2 className='text-[20px] leading-[28px] capitalize font-semibold'>
          Comments
        </h2>
        <div className='text-[12px]'>
          <button
            className={`${activeSorting === 'newest' ? null : 'text-accent'}`}
            onClick={() => setActiveSorting('oldest')}
          >
            oldest
          </button>{' '}
          |{' '}
          <button
            className={`${activeSorting === 'newest' ? 'text-accent' : null}`}
            onClick={() => setActiveSorting('newest')}
          >
            newest
          </button>
        </div>

        <ul className='basis-[100%] mt-[40px]'>
          {comments.map(comment => (
            <li key={comment.id}>
              <p className='text-[14px] leading-[24px] text-[#777777]'>
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
        <ul>
          <PaginationButton active children={1} />
        </ul>
      </div>
    </section>
  );
};
