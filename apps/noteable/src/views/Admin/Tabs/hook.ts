import { useMemo } from 'react';
import { useGetAllTabs } from '../../../hooks';

export function useAdminTabsView() {
  const { tablatures, isSuccess, isError, isLoading } = useGetAllTabs();

  return useMemo(
    () => ({
      tablatures,
      isSuccess,
      isError,
      isLoading,
    }),
    [tablatures, isSuccess, isError, isLoading]
  );
}
