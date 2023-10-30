import {Artist} from "@noteable/types";

export async function getArtists() {
  const ERROR_MESSAGE = 'Something went wrong! Could not fetch all artists!';

  let data;
  try {
    data = await fetch(`http://localhost:3000/api/artist`);
  } catch (error) {
    throw new Error(ERROR_MESSAGE)
  }

  if(!data || !data.ok){
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json()) as Artist[];
}
