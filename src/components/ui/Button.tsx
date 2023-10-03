interface ButtonProps {
  children: React.ReactNode;
  buttonStyle: 'light' | 'dark';
  type?: 'submit' | 'button';
}

export const Button = ({ children, buttonStyle, type }: ButtonProps) => {
  return (
    <button
      className={`w-buttonWidth h-8 ${
        buttonStyle === 'light' && 'bg-accent && '
      } text-textPrimary`}
      type={type ? type : 'button'}
    >
      {children}
    </button>
  );
};
