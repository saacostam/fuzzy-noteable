'use client';

import { useCallback, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { InputField, IUser, IKey, Alert } from '../../components';
import { ROUTES } from '../../lib/constants';

interface SignInForm {
  username: string;
  password: string;
}

export default function SignIn() {
  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || ROUTES.LANDING;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInForm>({
    mode: 'onSubmit',
    values: {
      username: '',
      password: '',
    },
    resetOptions: {
      keepErrors: false,
    },
  });

  const onSubmit = useCallback<SubmitHandler<SignInForm>>(
    async ({ username, password }) => {
      if (isLoading || isSuccess) return;

      setIsLoading(true);
      try {
        const res = await signIn('credentials', {
          redirect: false,
          username: username,
          password: password,
          callbackUrl,
        });

        if (!res?.error) {
          setIsSuccess(true);
          push(callbackUrl);
        } else {
          setError('root', { message: 'Wrong username or password' });
        }
      } catch (error: any) {
        setError('root', { message: error.message });
      }

      setIsLoading(false);
    },
    []
  );

  return (
    <div className="hero min-h-[calc(100vh-68px)]">
      <div
        className={
          'card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ' +
          (isSuccess ? 'border-success' : '')
        }
      >
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl font-bold text-center">Sign In</h2>
          <span className="block mx-auto mb-2">
            Don't have an account yet?{' '}
            <Link
              className="link link-secondary font-bold"
              href={ROUTES.SIGN_UP}
            >
              Sign Up
            </Link>
          </span>

          <div className="mb-1">
            <InputField
              type="text"
              label="Username"
              icon={<IUser />}
              formRegistration={register('username', { required: true })}
              error={errors.username}
            />
            <InputField
              type="password"
              label="Password"
              icon={<IKey />}
              formRegistration={register('password', { required: true })}
              error={errors.password}
            />
          </div>

          {errors.root?.message ? (
            <Alert type="error" message={errors.root.message} />
          ) : null}

          <div className="form-control">
            <button
              className="btn btn-accent"
              type="submit"
              disabled={isLoading || isSuccess}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
