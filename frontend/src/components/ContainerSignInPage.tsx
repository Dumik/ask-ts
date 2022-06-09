import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useContext } from 'react';

import { AuthContext } from 'context';
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
  const { login } = useContext(AuthContext);
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
    username: string | null | undefined;
    password: string | null | undefined;
  };

  const handlerLogin = async (userData: BodyType) => {
    try {
      const data: any = await request('/api/auth/login', 'POST', {
        ...userData,
      });

      if (data.token && data.userId) {
        login(data.token, data.userId);
      }
    } catch (e) {
      console.log('%c jordan ERROR', 'color: red; font-weight: bold; font-size: 16px; text-transform: uppercase', e);
    }
  };
  const onSubmit: (data: any) => void = (data: BodyType) => {
    handlerLogin(data);
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
