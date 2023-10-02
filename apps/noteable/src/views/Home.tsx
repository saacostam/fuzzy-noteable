import {useQuery} from "react-query";
import {NoteableViewer} from "@noteable/react-components";
import React from "react";
import {getTabById} from "../query";
import {useParams} from "react-router-dom";

export function HomeView(){
  const { id } = useParams();
  if (!id) throw new Error('No Id was found. Please check the current URL!')
  const { data , isLoading, isSuccess, error} = useQuery('tab', () => getTabById(id));

  return (
    isLoading?
      null:
      isSuccess ?
        // @ts-ignore
        <NoteableViewer tablature={data} mode={'interactive'}/>:
        <span>{error?.toString()}</span>
  )
}
