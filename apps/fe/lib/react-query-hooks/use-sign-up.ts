import { useMemo } from 'react';
import { useMutation } from 'react-query';

import { RegisterUserDto } from '@noteable/interfaces';
import { fetcher } from '../fetcher';
import { handleRequestData } from './utils'

const ERROR_MESSAGE = 'Was unable to register user. Please try again!';

export async function registerUser(registerUserDto: RegisterUserDto) {
  const data = await fetcher.post(`/user/register`, registerUserDto);

  return await handleRequestData(data, {
    errorMessage: ERROR_MESSAGE,
  });
}

export function useSignUp() {
  const { data, isSuccess, isLoading, isError, error, mutate } = useMutation({
    mutationFn: registerUser,
    mutationKey: ['register-user'],
  });

  return useMemo(() => {
    return {
      signedUpUser: data,
      isSuccess: isSuccess,
      isLoading: isLoading,
      isError: isError,
      error: error ? (error instanceof Error) ? error : new Error(ERROR_MESSAGE) : undefined,
      doSignUpUser: mutate,
    };
  }, [data, isLoading, isError, isSuccess, error, mutate]);
}
