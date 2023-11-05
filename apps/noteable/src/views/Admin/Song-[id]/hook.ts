import {useCallback, useMemo, useState} from "react";
import {useParams} from "react-router-dom";
import {ChordName, MusicUnitChordWithId} from "@noteable/types";

import {useCreateTab, useGetTabsBySong} from "../../../hooks";

export function useAdminSongById(){
  const {id} = useParams();
  if (!id) throw new Error('No Id was found. Please check the current URL!');

  const [
    musicUnits,
    setMusicUnits
  ] = useState<MusicUnitChordWithId[]>([]);

  const handleAddNewMusicUnit = useCallback(() => {
    const len = musicUnits.length;
    const newId = len > 0 ? musicUnits[len-1].id+1 : 1;

    const newMusicUnit: MusicUnitChordWithId = {
      id: newId,
      dur: 0,
      type: "ch",
      self: 'C',
    };

    setMusicUnits([
      ...musicUnits,
      newMusicUnit,
    ])
  }, [
    musicUnits,
    setMusicUnits,
  ]);

  const handleRemoveMusicUnit = useCallback((id: number) => {
    setMusicUnits(musicUnits.filter(mu => mu.id !== id));
  }, [
    musicUnits,
    setMusicUnits,
  ]);

  const handleMusicUnitChange = useCallback(
    (
      id: number,
      self: ChordName,
      dur: number,
    ) => {
    const updatedMusicUnits = musicUnits.map(
      mu => (mu.id === id ? {...mu, self, dur} : mu)
    );
    setMusicUnits(updatedMusicUnits);
  }, [
    musicUnits,
    setMusicUnits,
  ])

  const {
    songTabs,
    isLoading: getTabsBySongIsLoading,
    isError: getTabsBySongIsError,
  } = useGetTabsBySong(id);

  const {
    doCreateTab,
    isLoading: createTabIsLoading,
  } = useCreateTab();

  const handleDoCreateTab = useCallback(() => {
    console.log(musicUnits);
  }, [
    musicUnits,
  ])

  return useMemo(() => {
    return {
      songTabs: songTabs?.tablatures || [],
      getTabsBySongIsLoading: getTabsBySongIsLoading,
      getTabsBySongIsError: getTabsBySongIsError,
      doCreateTab: handleDoCreateTab,
      createTabIsLoading: createTabIsLoading,
      musicUnits: musicUnits,
      handleAddNewMusicUnit: handleAddNewMusicUnit,
      handleRemoveMusicUnit: handleRemoveMusicUnit,
      handleMusicUnitChange: handleMusicUnitChange,
    }
  }, [
    songTabs,
    getTabsBySongIsLoading,
    getTabsBySongIsError,
    doCreateTab,
    createTabIsLoading,
    musicUnits,
    handleAddNewMusicUnit,
    handleRemoveMusicUnit,
    handleMusicUnitChange,
  ])
}
