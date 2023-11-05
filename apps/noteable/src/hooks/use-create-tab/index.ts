import {useMemo} from "react";
import {useMutation} from "react-query";
import {createTab} from "../../mutation";

export function useCreateTab(){
  const {data, isSuccess, isLoading, isError, error, mutate} = useMutation({
    mutationFn: createTab,
    mutationKey: 'create-tab',
  })

  return useMemo(() => {
    return {
      createdTab: data,
      isSuccess: isSuccess,
      isLoading: isLoading,
      isError: isError,
      error: error,
      doCreateTab: mutate,
    }
  }, [data, isLoading, isError, isSuccess, error, mutate]);
}
