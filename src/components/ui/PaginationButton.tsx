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
      className={`w-5 h-6 text-textPrimary hover:bg-accent transition-all duration-200 ${
        active ? 'bg-accent' : 'bg-slate-700'
      }`}
    >
      {children}
    </button>
  );
};
