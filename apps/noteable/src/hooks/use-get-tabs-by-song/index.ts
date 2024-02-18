import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { getTabsBySong } from '../../query';

export function useGetTabsBySong(id: string) {
  const { data, isLoading, isSuccess, isError, error } = useQuery(
    ['song-tabs', id],
    () => getTabsBySong(id)
  );

  return useMemo(() => {
    return {
      songTabs: data,
      isLoading: isLoading,
      isSuccess: isSuccess,
      isError: isError,
      error: error,
    };
  }, [data, isLoading, isSuccess, isError, error]);
}
