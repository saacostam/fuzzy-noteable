import {Artist, LonelySong} from "@noteable/types";

export async function getSongsByArtist(id: string) {
  const ERROR_MESSAGE = 'Something went wrong! Could not fetch artist data!';

  let data;
  try {
    data = await fetch(`http://localhost:3000/api/artist/${id}/songs`);
  } catch (error) {
    throw new Error(ERROR_MESSAGE)
  }

  if(!data || !data.ok){
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json()) as Artist & {songs: LonelySong[]};
}
