import {Tablature} from "@noteable/types";
import {fetcher} from "../fetcher";

export async function getTabById(id: string) {
  let data;
  try {
    data = await fetcher.get(`${process.env.NX_REACT_APP_TAB_URL}/tab/${id}`);
  } catch (error) {
    throw new Error('Something went wrong')
  }

  if(!data) {
    throw new Error('No tab found with the given id!');
  }

  if(!data.ok){
    throw new Error('The query was unsuccessful!');
  }

  return (await data.json()) as Tablature;
}
