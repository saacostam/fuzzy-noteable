import { GetAllTabsDto } from '@noteable/interfaces';
import { fetcher } from '../fetcher';

export async function getAllTabs() {
  const ERROR_MESSAGE = 'Something went wrong! Could not fetch all tabs!';

  let data;
  try {
    data = await fetcher.get(`/tab`);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  if (!data || !data.ok) {
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json()) as GetAllTabsDto;
}
