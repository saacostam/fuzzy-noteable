import {Artist, LonelySong} from "@noteable/types";
import {fetcher} from "../fetcher";

export async function getSongsByArtist(id: string) {
  const ERROR_MESSAGE = 'Something went wrong! Could not fetch artist data!';

  let data;
  try {
    data = await fetcher.get(`${process.env.NX_REACT_APP_TAB_URL}/artist/${id}/songs`);
  } catch (error) {
    throw new Error(ERROR_MESSAGE)
  }

  if(!data || !data.ok){
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json()) as Artist & {songs: LonelySong[]};
}
