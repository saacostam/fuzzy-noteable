import {useMemo} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getTabById} from "../../query";

export function useHome(){
  const { id } = useParams();
  if (!id) throw new Error('No Id was found. Please check the current URL!')
  const { data , isLoading, isSuccess, error} = useQuery(['tab', id], () => getTabById(id));

  return useMemo(() => {
    return {
      tablature: data,
      isLoading: isLoading,
      isSuccess: isSuccess,
      error: error,
    }
  }, [data, error, isSuccess, isLoading]);
}
