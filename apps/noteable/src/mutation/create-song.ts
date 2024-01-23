import {CreateSongDto} from "@noteable/interfaces";
import {fetcher} from "../fetcher";

export async function createSong(createSongDto: CreateSongDto) {
  const ERROR_MESSAGE = 'Was unable to create a new song!';

  let data;
  try {
    data = await fetcher.post(`${process.env.NX_REACT_APP_TAB_URL}/song`, createSongDto);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  if(!data || !data.ok){
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json());
}
