import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useHttp } from 'hooks';
import { Button, Input } from 'legos';
import { Fragment } from 'react';

const signUpFields = [
  {
    id: 'username-standard-required',
    fieldName: 'username',
    placeholder: 'Username',
    type: 'text',
    component: 'input',
  },

  {
    id: 'standard-password-input',
    fieldName: 'password',
    placeholder: 'Password',
    type: 'password',
    component: 'input',
  },
];

export const ContainerSignInPage = () => {
  const { request } = useHttp();
  const formSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is mendatory').min(3, 'Password must be at 3 char long'),
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
      console.log(
        '%c jordan email',
        'color: lime; font-weight: bold; font-size: 16px; text-transform: uppercase',
        email,
        password
      );
      const data: Promise<any> = request('/api/auth/signin', 'POST', {
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
    <div className=" w-96">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col h-550 justify-center">
          {signUpFields.map(({ id, fieldName, placeholder = '', type, component }) => (
            <Fragment key={id}>
              {component === 'input' ? (
                <Input
                  placeholder={placeholder}
                  id={id}
                  type={type}
                  validation={register(fieldName, { require: true })}
                  error={errors[fieldName]?.message || null}
                />
              ) : null}
            </Fragment>
          ))}

          <Button type="submit" title="Login" style="py-2 w-52" />
        </div>
      </form>
    </div>
  );
};
