import * as Yup from 'yup';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth, useHttp } from 'hooks';
import { Button, Input } from 'legos';
import { SIGN_IN } from 'routes';

type BodyType = {
  email: string | null | undefined;
  gander: string | null | undefined;
  password: string | null | undefined;
  username: string | null | undefined;
  fullName: string | null | undefined;
  birthday: string | null | undefined;
};

const signUpFields = [
  {
    id: 'email-standard-required',
    fieldName: 'email',
    placeholder: 'Email',
    type: 'email',
    component: 'input',
  },
  {
    id: 'fullName-standard-required',
    fieldName: 'fullName',
    placeholder: 'Full Name',
    type: 'text',
    component: 'input',
  },
  {
    id: 'username-standard-required',
    fieldName: 'username',
    placeholder: 'Username',
    type: 'text',
    component: 'input',
  },

  {
    id: 'gender-standard-required',
    fieldName: 'gender',
    label: 'Gender',
    component: 'select',
    variant1: 'Male',
    variant2: 'Female',
  },

  {
    id: 'birthday-standard-required',
    fieldName: 'birthday',
    label: 'Birthday',
    type: 'date',
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

export const ContainerSignUpPage = () => {
  const history = useNavigate();
  const { request } = useHttp();
  const formSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    fullName: Yup.string().required('Full name is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is mendatory').min(3, 'Password must be at 3 char long'),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm(formOptions);

  const { login } = useAuth();

  const handlerSignUp = (userData: BodyType) => {
    try {
      const data: Promise<any> | any = request('/api/auth/signup', 'POST', {
        ...userData,
      });

      if (data.token && data.userId) {
        login(data.token, data.userId);
        history(SIGN_IN);
      }
    } catch (e) {
      console.log('%c jordan e', 'color: lime; font-weight: bold; font-size: 16px; text-transform: uppercase', e);
    }
  };
  const onSubmit: (data: any) => void = (data: BodyType) => {
    handlerSignUp(data);
  };

  return (
    <div className=" w-96">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col h-550 justify-center">
          {signUpFields.map(({ id, fieldName, placeholder = '', type, component, label, ...item }) => (
            <Fragment key={id}>
              {component === 'input' ? (
                <>
                  {label && (
                    <label className=" text-left text-white text-lg font-bold">
                      {errors[fieldName]?.message || label}
                    </label>
                  )}
                  <Input
                    placeholder={placeholder}
                    id={id}
                    type={type}
                    validation={register(fieldName, { require: true })}
                    error={errors[fieldName]?.message || null}
                  />
                </>
              ) : component === 'select' ? (
                <>
                  {label && (
                    <label className=" text-left text-white text-lg font-bold">
                      {errors[fieldName]?.message || label}
                    </label>
                  )}
                  <select
                    className=" py-2 px-1 mb-2 outline-none rounded-sm border-2  border-gray-300"
                    name={fieldName}
                    id={id}
                    defaultValue="default"
                    {...register(fieldName, { require: true })}
                  >
                    <option value="default" disabled>
                      Choose your gander
                    </option>
                    <option value={item.variant1}>{item.variant1}</option>
                    <option value={item.variant2}>{item.variant2}</option>
                  </select>
                </>
              ) : null}
            </Fragment>
          ))}
          {/* eslint-disable-next-line */}
          <Button type="submit" title="Sign Up" style="py-2 w-52" />
        </div>
      </form>
    </div>
  );
};
