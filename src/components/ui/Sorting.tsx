interface SortingProps {
  sorting: string;
  onSortingChange: (sorting: string) => void;
}

export const Sorting = ({ sorting, onSortingChange }: SortingProps) => {
  return (
    <div className='text-[12px]'>
      <button
        className={`${sorting === 'asc' && 'text-accent'}`}
        onClick={() => onSortingChange('asc')}
      >
        oldest
      </button>{' '}
      |{' '}
      <button
        className={`${sorting === 'desc' && 'text-accent'}`}
        onClick={() => onSortingChange('desc')}
      >
        newest
      </button>
    </div>
  );
};
