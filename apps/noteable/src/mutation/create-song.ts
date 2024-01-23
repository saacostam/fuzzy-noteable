import {CreateSongDto} from "@noteable/interfaces";

export async function createSong(createSongDto: CreateSongDto) {
  const ERROR_MESSAGE = 'Was unable to create a new song!';

  let data;
  try {
    data = await fetch(`${process.env.NX_REACT_APP_TAB_URL}/song`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createSongDto),
    });
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  if(!data || !data.ok){
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json());
}
