'use client';

import { useEffect, useState } from 'react';
import { LoginInterface, LoginModel } from './(model-interface)/model';
import { fieldValidation, validateEmail } from '@/common/helper/validation';
import { errorMsg } from '@/config';
import CardComponent from '@/common/components/card/card';
import InputFields from '@/common/components/input-fields/input-field';
import ButtonComponent from '@/common/components/button/button';
import Link from 'next/link';
import { loginAction } from './(actions)/auth-action';
import { redirect, useRouter } from 'next/navigation';

function Login() {
  const router = useRouter();
  const [state, setState] = useState({
    emailError: '',
    passwordError: '',
    isLoading: false,
  });

  useEffect(() => {
    if (localStorage.getItem('user')) {
      return redirect('/');
    }
  }, []);

  const [loginData, setLoginData] = useState<LoginInterface>(new LoginModel());

  const handleChange = (key: string, value: string, field?: string) => {
    if (field) {
      if (key === 'email') {
        setState((prev) => ({
          ...prev,
          [`${key}Error`]: !value
            ? fieldValidation(field)
            : !validateEmail(value)
            ? errorMsg.emailValidate
            : '',
        }));
      } else {
        setState((prev) => ({
          ...prev,
          [`${key}Error`]: !value ? fieldValidation(field) : '',
        }));
      }
    }
    setLoginData((prev) => new LoginModel({ ...prev, [key]: value }));
  };

  const login = async () => {
    if (!loginData.email || !loginData.password) {
      return setState((prev) => ({
        ...prev,
        emailError: !loginData.email ? fieldValidation('E-Mail') : '',
        passwordError: !loginData.password ? fieldValidation('Password') : '',
      }));
    }

    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    const res = await loginAction(loginData);
    if (res.status === 200) {
      return router.push('/');
    }

    setState((prev) => ({
      ...prev,
      isLoading: false,
    }));
  };

  return (
    <div className='h-screen flex items-center'>
      <CardComponent
        title='Login'
        desc='Provide your information to Login into Your account.'
        center={true}
      >
        <div className='grid gap-4'>
          <InputFields
            placeholder='E-Mail'
            label='E-Mail'
            type='email'
            onChange={(value: string) => handleChange('email', value, 'E-Mail')}
            onBlur={(value: string) => handleChange('email', value, 'E-Mail')}
            errMsg={state.emailError}
          />

          <InputFields
            placeholder='Password'
            label='Password'
            type='password'
            onChange={(value: string) =>
              handleChange('password', value, 'Password')
            }
            onBlur={(value: string) =>
              handleChange('password', value, 'Password')
            }
            errMsg={state.passwordError}
          />

          <ButtonComponent
            disable={state.isLoading}
            onClick={login}
            label='Login'
          />
        </div>
        <div className='mt-4 text-center text-sm'>
          Dont have an account? &nbsp;
          <Link href='/auth/register' className='underline'>
            Sign Up
          </Link>
        </div>
      </CardComponent>
    </div>
  );
}

export default Login;
