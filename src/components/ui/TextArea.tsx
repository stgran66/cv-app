import { UseFormRegister, RegisterOptions } from 'react-hook-form';

import { FormValues } from './CommentForm';

interface TextAreaProps {
  placeholder: string;
  register?: UseFormRegister<FormValues>;
  name: 'name' | 'email' | 'content';
  registerOptions?: RegisterOptions<FormValues, 'name'> | undefined;
}

export const TextArea = ({
  placeholder,
  register,
  name,
  registerOptions,
}: TextAreaProps) => {
  return (
    <textarea
      placeholder={placeholder ? placeholder : ''}
      {...(register ? { ...register(name, registerOptions) } : null)}
      className='w-[100%] h-13 bg-transparent border border-[white] p-3 placeholder:text-textSecondary text-textPrimary resize-none'
    />
  );
};
