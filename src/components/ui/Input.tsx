import { UseFormRegister, RegisterOptions } from 'react-hook-form';
import { FormValues } from '../CommentForm';

interface InputProps {
  type: string;
  placeholder: string;
  register?: UseFormRegister<FormValues>;
  name: 'name' | 'email' | 'content';
  registerOptions?: RegisterOptions<FormValues, 'name'> | undefined;
}

export const Input = ({
  type,
  placeholder,
  register,
  name,
  registerOptions,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder ? placeholder : ''}
      name={name}
      {...(register ? { ...register(name, registerOptions) } : null)}
      className='w-[45%] bg-transparent border border-[white] p-[10px] placeholder:text-[#777777] text-textPrimary'
    />
  );
};
