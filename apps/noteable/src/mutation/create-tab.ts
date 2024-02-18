import { CreateTabDto } from '@noteable/interfaces';
import { fetcher } from '../fetcher';

export async function createTab(createTabDto: CreateTabDto) {
  const ERROR_MESSAGE = 'Was unable to create a new tab!';

  let data;
  try {
    data = await fetcher.post(`/tab`, createTabDto);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  if (!data || !data.ok) {
    throw new Error(ERROR_MESSAGE);
  }

  return await data.json();
}
