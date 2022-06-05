import { useHttp } from 'hooks';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

export const AuthPage = () => {
  // const [email, setEmail] = useState();
  // const [pass, setPass] = useState();
  const { request, error } = useHttp();
  const formSchema = Yup.object().shape({
    password: Yup.string().required('Password is mendatory').min(3, 'Password must be at 3 char long'),
    passwordConfirm: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const formOptions = { resolver: formSchema) };
  // const handleChangePass = (event, newValue) => {
  //   setEmail(newValue);
  // };

  // const handleChangeEmail = (event, newValue) => {
  //   setPass(newValue);
  // };

  const handlerSignUp = ({ email, password }) => {
    try {
      const data = request('/api/auth/signup', 'POST', {
        email: email,
        password: password,
      });
      console.log('%c jordan data', 'color: lime; font-weight: bold; font-size: 16px; text-transform: uppercase', data);
    } catch (e) {
      console.log('%c jordan e', 'color: lime; font-weight: bold; font-size: 16px; text-transform: uppercase', e);
    }
  };

  const onSubmit = data => {
    console.log('%c jordan data', 'color: lime; font-weight: bold; font-size: 16px; text-transform: uppercase', data);
    handlerSignUp(data);
  };
  return (
    <div
      maxWidth={500}
      mixWidth={400}
      minHeight={500}
      sx={{
        background: '#fff',
      }}
    >
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
