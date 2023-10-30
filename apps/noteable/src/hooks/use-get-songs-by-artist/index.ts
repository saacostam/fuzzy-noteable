import {useMemo} from "react";
import {useQuery} from "react-query";

import {getSongsByArtist} from "../../query";

export function useGetSongsByArtist(id: string){
  const { data , isLoading, isSuccess, isError, error} = useQuery(['artist-songs', id], () => getSongsByArtist(id));

  return useMemo(() => {
    return {
      artistsSongs: data,
      isLoading: isLoading,
      isSuccess: isSuccess,
      isError: isError,
      error: error,
    }
  }, [
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  ])
}
