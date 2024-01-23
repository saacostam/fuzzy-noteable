import {CreateArtistDto} from "@noteable/interfaces";
import {fetcher} from "../fetcher";

export async function createArtist(createArtistDto: CreateArtistDto) {
  const ERROR_MESSAGE = 'Was unable to create a new artist!';

  let data;
  try {
    data = await fetcher.post(`${process.env.NX_REACT_APP_TAB_URL}/artist`, createArtistDto);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  if(!data || !data.ok){
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json());
}
