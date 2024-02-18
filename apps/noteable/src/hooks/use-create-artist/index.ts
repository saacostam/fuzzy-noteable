import { useMemo } from 'react';
import { useMutation } from 'react-query';
import { createArtist } from '../../mutation';

export function useCreateArtist() {
  const { data, isSuccess, isLoading, isError, error, mutate } = useMutation({
    mutationFn: createArtist,
    mutationKey: ['create-artist'],
  });

  return useMemo(() => {
    return {
      createdArtist: data,
      isSuccess: isSuccess,
      isLoading: isLoading,
      isError: isError,
      error: error,
      doCreateArtist: mutate,
    };
  }, [data, isLoading, isError, isSuccess, error, mutate]);
}
