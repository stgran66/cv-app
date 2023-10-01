interface ButtonProps {
  children: React.ReactNode;
  buttonStyle: 'light' | 'dark';
  type?: 'submit' | 'button';
}

export const Button = ({ children, buttonStyle, type }: ButtonProps) => {
  return (
    <button
      className={`w-[170px] h-[48px] ${
        buttonStyle === 'light' && 'bg-accent && '
      } text-[#fafafa]`}
      type={type ? type : 'button'}
    >
      {children}
    </button>
  );
};
