import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Button, Input, TextArea } from 'components/ui';
import { postComment } from 'services/mockapi';

export interface FormValues {
  name: string;
  email: string;
  content: string;
}

export const CommentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    await postComment(data);
    reset();
  };

  const fields = ['name', 'email', 'content'] as (keyof FormValues)[];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='text-black mt-7 flex flex-wrap justify-between gap-7'
    >
      <Input
        type='text'
        placeholder='Your Name'
        register={register}
        name='name'
        registerOptions={{
          required: 'name is required',
          maxLength: {
            value: 30,
            message: "name can't be longer than 30 characters",
          },
        }}
      />
      <Input
        type='text'
        placeholder='Your Email'
        register={register}
        name='email'
        registerOptions={{
          required: 'email is required',
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            message: 'input should be a valid email',
          },
        }}
      />

      <TextArea
        placeholder='Your Message'
        name='content'
        register={register}
        registerOptions={{
          required: 'comment is required',
          minLength: {
            value: 6,
            message: 'comment should be at least 6 characters long',
          },
          maxLength: {
            value: 250,
            message: "comment shouldn't be longer than 250 characters",
          },
        }}
      />

      <Button type='submit' buttonStyle='light'>
        Send
      </Button>
      <div className='w-[100%]'>
        {fields.map(field => (
          <ErrorMessage
            key={field}
            errors={errors}
            name={field}
            render={({ message }) => <p className='text-red-600'>{message}</p>}
          />
        ))}
      </div>
    </form>
  );
};
