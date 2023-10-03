import { usePagination, DOTS } from 'hooks';
import { PaginationButton } from './';

interface PaginationProps {
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  limit: number;
}

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  limit,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    limit,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className='flex gap-[5px] mt-[40px]'>
      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return (
            <li key={idx}>
              <PaginationButton>&#8230;</PaginationButton>
            </li>
          );
        }

        return (
          <li key={idx} onClick={() => onPageChange(pageNumber as number)}>
            <PaginationButton active={pageNumber === currentPage}>
              {pageNumber}
            </PaginationButton>
          </li>
        );
      })}
    </ul>
  );
};
