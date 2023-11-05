import {LeanTablature} from "@noteable/types";

type CreateTabPayload = {
  tab: LeanTablature;
  songID: string;
}

export async function createTab(payload: CreateTabPayload){
  const ERROR_MESSAGE = 'Was unable to create a new tab!';

  let data;
  try {
    data = await fetch(`http://localhost:3000/api/tab`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tab: payload.tab,
        songID: payload.songID,
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
