import { useHttp } from 'hooks';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const AuthPage = () => {
  const { request, error } = useHttp();
  const formSchema = Yup.object().shape({
    password: Yup.string().required('Password is mendatory').min(3, 'Password must be at 3 char long'),
    passwordConfirm: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm(formOptions);

  type BodyType = {
    email: string | null | undefined;
    password: string | null | undefined;
  };

  const handlerSignUp = (email: string | null | undefined, password: string | null | undefined) => {
    try {
      const data: Promise<any> = request('/api/auth/signup', 'POST', {
        email: email,
        password: password,
      });
      console.log('%c jordan data', 'color: lime; font-weight: bold; font-size: 16px; text-transform: uppercase', data);
    } catch (e) {
      console.log('%c jordan e', 'color: lime; font-weight: bold; font-size: 16px; text-transform: uppercase', e);
    }
  };

  const onSubmit: (data: any) => void = (data: BodyType) => {
    handlerSignUp(data.email, data.password);
  };
  return (
    <div>
      sign in
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>email</p>
        <input id="standard-required" type="Email" {...register('email', { require: true })} />
        pass
        <input id="standard-password-input" type="password" {...register('password', { require: true, min: 8 })} />
        <button> sign in </button>
        <button type="submit"> sign up </button>
      </form>
    </div>
  );
};
