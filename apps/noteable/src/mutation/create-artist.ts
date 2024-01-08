import {LeanArtist} from "@noteable/types";

export async function createArtist(artist: LeanArtist) {
  const ERROR_MESSAGE = 'Was unable to create a new artist!';

  let data;
  try {
    data = await fetch(`${process.env.NX_REACT_APP_TAB_URL}/artist`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        artist: artist,
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
