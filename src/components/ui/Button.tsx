interface ButtonProps {
  children: React.ReactNode;
  buttonStyle: 'light' | 'dark';
}

export const Button = ({ children, buttonStyle }: ButtonProps) => {
  return (
    <button
      className={`w-[170px] h-[48px] ${
        buttonStyle === 'light' && 'bg-accent && '
      } text-[#fafafa]`}
    >
      {children}
    </button>
  );
};
