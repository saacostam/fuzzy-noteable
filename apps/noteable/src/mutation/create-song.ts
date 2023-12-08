import {LeanSong} from "@noteable/types";

type CreateSongPayload = {
  song: LeanSong;
  artistsIDs: string[];
}

export async function createSong(payload: CreateSongPayload) {
  const ERROR_MESSAGE = 'Was unable to create a new song!';

  let data;
  try {
    data = await fetch(`http://localhost:3000/api/song`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        song: payload.song,
        artistsIDs: payload.artistsIDs,
      }),
    });
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  if(!data || !data.ok){
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json());
}
