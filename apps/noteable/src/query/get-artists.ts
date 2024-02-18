import { Artist } from '@noteable/types';
import { fetcher } from '../fetcher';

export async function getArtists() {
  const ERROR_MESSAGE = 'Something went wrong! Could not fetch all artists!';

  let data;
  try {
    data = await fetcher.get(`/artist`);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  if (!data || !data.ok) {
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json()) as Artist[];
}
