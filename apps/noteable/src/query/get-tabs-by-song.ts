import {LonelyTablature, Song} from "@noteable/types";

export async function getTabsBySong(id: string) {
  const ERROR_MESSAGE = 'Something went wrong! Could not fetch song data!';

  let data;
  try {
    data = await fetch(`http://localhost:3000/api/song/${id}/tabs`);
  } catch (error) {
    throw new Error(ERROR_MESSAGE)
  }

  if(!data || !data.ok){
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json()) as Song & {tablatures: LonelyTablature[]};
}
