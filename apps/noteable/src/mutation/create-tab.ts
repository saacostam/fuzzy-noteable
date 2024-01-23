import {CreateTabDto} from "@noteable/interfaces";

export async function createTab(createTabDto: CreateTabDto){
  const ERROR_MESSAGE = 'Was unable to create a new tab!';

  let data;
  try {
    data = await fetch(`${process.env.NX_REACT_APP_TAB_URL}/tab`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createTabDto),
    });
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }

  if(!data || !data.ok){
    throw new Error(ERROR_MESSAGE);
  }

  return (await data.json());
}
