import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getArtists } from '../../query';

export function useGetArtists() {
  const { data, isSuccess, isLoading, isError, error } = useQuery(
    'get-artist',
    getArtists
  );

  return useMemo(() => {
    return {
      artists: data,
      isSuccess: isSuccess,
      isLoading: isLoading,
      isError: isError,
      error: error,
    };
  }, [data, isLoading, isError, isSuccess, error]);
}
