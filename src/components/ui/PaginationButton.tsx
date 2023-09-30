interface PaginationButtonProps {
  children: React.ReactNode;
  active?: boolean;
}

export const PaginationButton = ({
  children,
  active = false,
}: PaginationButtonProps) => {
  return (
    <button
      className={`w-[25px] h-[30px] text-textPrimary ${
        active ? 'bg-accent' : 'bg-slate-700'
      }`}
    >
      {children}
    </button>
  );
};
