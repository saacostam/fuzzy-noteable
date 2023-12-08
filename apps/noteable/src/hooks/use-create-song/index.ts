import {useMemo} from "react";
import {useMutation} from "react-query";
import {createSong} from "../../mutation";

export function useCreateSong(){
  const {
    data,
    isSuccess,
    isLoading,
    isError,
    error,
    mutate
  } = useMutation({
    mutationFn: createSong,
    mutationKey: ['create-song'],
  })

  return useMemo(() => {
    return {
      createdSong: data,
      isSuccess: isSuccess,
      isLoading: isLoading,
      isError: isError,
      error: error,
      doCreateSong: mutate,
    }
  }, [data, isLoading, isError, isSuccess, error, mutate]);
}
