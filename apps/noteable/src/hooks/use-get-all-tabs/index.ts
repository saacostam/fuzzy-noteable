import {useMemo} from "react";
import {useQuery} from "react-query";
import {getAllTabs} from "../../query/get-all-tabs";

export function useGetAllTabs(){
  const { data, isSuccess, isLoading, isError, error} = useQuery('get-all-tabs', getAllTabs);

  return useMemo(() => ({
    tablatures: data?.tablatures || [],
    isSuccess: isSuccess,
    isLoading: isLoading,
    isError: isError,
    error: error,
  }), [ data, isLoading, isError, isSuccess, error ]);
}
