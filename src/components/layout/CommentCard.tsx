import type { FullComment } from 'types/shared';
import { getDayMonth } from 'utils';

export const CommentCard = ({ comment }: { comment: FullComment }) => {
  const { id, createdAt, name, email, content } = comment;
  return (
    <li key={id}>
      <p className='text-[14px] leading-[24px] text-[#777777] mt-[40px]'>
        {getDayMonth(createdAt)}
      </p>
      <h3 className='text-[20px] font-semibold leading-[24px] mt-[10px]'>
        <span className='capitalize'>{name}</span> {email}
      </h3>
      <p className='mt-[10px]'>{content}</p>
    </li>
  );
};
