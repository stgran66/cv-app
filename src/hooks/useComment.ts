import { useState, useEffect, SetStateAction } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchComments } from 'services/mockapi';
import { PAGE_SIZE } from 'data';
import { FullComment } from 'types/shared';

export const useComment = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsPage = searchParams.get('page');
  const searchParamsOrder = searchParams.get('order');

  const [comments, setComments] = useState<FullComment[] | []>([]);
  const [totalCount, setTotalCount] = useState(0);
  /* Sorting doesn't work correctly in API, cause createdAt and id are string, so they are sorted as string
    I could have done sorting on frontend, but then API pagination would not make sense
    so for now I left sorting as it is, but really it should sort correctly on API end*/
  const [sorting, setSorting] = useState(searchParamsOrder || 'desc');
  const [currentPage, setCurrentPage] = useState(Number(searchParamsPage) || 1);

  useEffect(() => {
    async function getComments() {
      const data = await fetchComments(currentPage, PAGE_SIZE, sorting);
      setComments(data);
    }
    getComments();
  }, [sorting, currentPage]);

  // It is a workaround, normally API should return total count with pagination calls
  useEffect(() => {
    async function getCommentsTotalCount() {
      const data = await fetchComments();
      if (data) {
        setTotalCount(data.length);
      }
    }
    getCommentsTotalCount();
  }, []);

  const onPageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  const onSortingChange = (sorting: string) => {
    setSorting(sorting);
    searchParams.set('order', sorting);
    setSearchParams(searchParams);
  };

  return {
    comments,
    sorting,
    onSortingChange,
    currentPage,
    onPageChange,
    totalCount,
  };
};
