'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { InputField, IUser, IMail, IKey, Alert } from '../../../components';
import { useCallback, useEffect } from 'react';
import { useSignUp } from '../../../lib/react-query-hooks';
import { ROUTES } from '../../../lib/constants';

interface SignUpForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const { push } = useRouter();

  const { doSignUpUser, error, isError, isSuccess, isLoading } = useSignUp();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpForm>({
    mode: 'onSubmit',
    values: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resetOptions: {
      keepErrors: false,
    },
  });

  const onSubmit = useCallback<SubmitHandler<SignUpForm>>(
    ({ username, email, password, confirmPassword }) => {
      // Form Validations
      if (password !== confirmPassword)
        return setError('confirmPassword', {
          message: 'Passwords are different',
        });

      doSignUpUser({
        username: username,
        email: email,
        password: password,
      });
    },
    []
  );

  useEffect(() => {
    if (isError && error) {
      setError('root', { message: error.message });
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => push(ROUTES.SIGN_IN), 800);
    }
  }, [isSuccess]);

  return (
    <div className="hero min-h-[calc(100vh-68px)]">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>
          <span className="block mx-auto mb-2">
            Already a user?{' '}
            <Link
              className="link link-secondary font-bold"
              href={ROUTES.SIGN_IN}
            >
              Sign In
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
              type="email"
              label="Email"
              icon={<IMail />}
              formRegistration={register('email', { required: true })}
              error={errors.email}
            />
            <InputField
              type="password"
              label="Password"
              icon={<IKey />}
              formRegistration={register('password', { required: true })}
              error={errors.password}
            />
            <InputField
              type="password"
              label="Confirm Password"
              icon={<IKey />}
              formRegistration={register('confirmPassword', { required: true })}
              error={errors.confirmPassword}
            />
          </div>

          {errors.root?.message ? (
            <Alert type="error" message={errors.root.message} />
          ) : null}

          {isSuccess ? (
            <Alert type="success" message={'User successfully signed up'} />
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
