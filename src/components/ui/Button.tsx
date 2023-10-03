interface ButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'button';
}

export const Button = ({ children, type }: ButtonProps) => {
  return (
    <button
      className={`w-buttonWidth h-8 bg-accent text-textPrimary hover:bg-transparent hover:border hover:border-accent transition-all duration-200`}
      type={type ? type : 'button'}
    >
      {children}
    </button>
  );
};
