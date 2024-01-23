import {CreateSongDto} from "@noteable/interfaces";
import {fetcher} from "../fetcher";

export async function createSong(createSongDto: CreateSongDto) {
  const ERROR_MESSAGE = 'Was unable to create a new song!';

  let data;
  try {
    data = await fetcher.post(`/song`, createSongDto);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  if(!data || !data.ok){
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json());
}
