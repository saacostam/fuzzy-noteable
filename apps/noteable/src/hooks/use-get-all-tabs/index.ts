import { useQuery } from 'react-query';
import { getAllTabs } from '../../query/get-all-tabs';

export function useGetAllTabs() {
  return useQuery('get-all-tabs', getAllTabs);
}
