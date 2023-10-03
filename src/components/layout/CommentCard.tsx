import type { FullComment } from 'types/shared';
import { getDayMonth } from 'utils';

export const CommentCard = ({ comment }: { comment: FullComment }) => {
  const { id, createdAt, name, email, content } = comment;
  return (
    <li key={id}>
      <p className='text-s leading-s text-textSecondary mt-7'>
        {getDayMonth(createdAt)}
      </p>
      <h3 className='text-xl font-semibold leading-s mt-3'>
        <span className='capitalize'>{name}</span> {email}
      </h3>
      <p className='mt-3'>{content}</p>
    </li>
  );
};
