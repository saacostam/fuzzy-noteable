import {useCallback, useEffect, useMemo, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {ChordName, Difficulty, MusicUnitChordWithId, Tablature, Transposition} from "@noteable/types";

import {useCreateTab, useGetTabsBySong} from "../../../hooks";
import {buildLeanTablatureUtil, mockChordTabCreationUtil} from "./utils";

const LOCAL_STORAGE_KEY = 'sve-editor';

export function useAdminSongById(){
  const nagivate = useNavigate();
  const {id} = useParams();
  if (!id) throw new Error('No Id was found. Please check the current URL!');

  const [tablature, setTablature] = useState<Tablature | undefined>(undefined);

  const [
    musicUnits,
    setMusicUnits
  ] = useState<MusicUnitChordWithId[]>([]);
  const [startPoint, setStartPoint] = useState(0);
  const [bpm, setBpm] = useState(120);
  const [source, setSource] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [transposition, setTransposition] = useState<Transposition>(0);

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
  ]);

  const handleTestCreateTab = useCallback(() => {
    const leanTab = buildLeanTablatureUtil({
      bpm: bpm,
      source: source,
      difficulty: difficulty,
      startPoint: startPoint,
      transposition: transposition,
      musicUnitsChordWithId: musicUnits,
    });
    const mockTab = mockChordTabCreationUtil(leanTab);
    setTablature(mockTab);
  }, [bpm, source, difficulty, startPoint, transposition, musicUnits, setTablature]);

  const {
    songTabs,
    isLoading: getTabsBySongIsLoading,
    isError: getTabsBySongIsError,
  } = useGetTabsBySong(id);

  const {
    doCreateTab,
    isLoading: createTabIsLoading,
    isSuccess: createTabIsSuccess,
    createdTab,
  } = useCreateTab();

  const handleDoCreateTab = useCallback(() => {
    const leanTab = buildLeanTablatureUtil({
      bpm: bpm,
      source: source,
      difficulty: difficulty,
      startPoint: startPoint,
      transposition: transposition,
      musicUnitsChordWithId: musicUnits,
    });

    doCreateTab({
      tab: leanTab,
      songID: id,
    })
  }, [
    bpm,
    source,
    difficulty,
    startPoint,
    transposition,
    musicUnits,
    doCreateTab,
    id,
  ]);

  useEffect(() => {
    if (createTabIsSuccess && createdTab && createdTab.id){
      nagivate(`/tab/${createdTab.id}`);
    }
  }, [
    createTabIsSuccess,
    createdTab,
    nagivate,
  ])

  const handleSaveInLocalStorage = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(musicUnits));
  }, [
    musicUnits,
  ]);

  const handleLoadFromLocalStorage = useCallback(() => {
    let payload;
    try {
      payload = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
    } catch (_){
      payload = [];
    }
    setMusicUnits(payload);
  }, [
    setMusicUnits,
  ])

  return useMemo(() => {
    return {
      songName: songTabs?.name || 'NO_NAME',
      songTabs: songTabs?.tablatures || [],
      getTabsBySongIsLoading: getTabsBySongIsLoading,
      getTabsBySongIsError: getTabsBySongIsError,
      doCreateTab: handleDoCreateTab,
      createTabIsLoading: createTabIsLoading,
      musicUnits: musicUnits,
      setMusicUnits: setMusicUnits,
      handleAddNewMusicUnit: handleAddNewMusicUnit,
      handleRemoveMusicUnit: handleRemoveMusicUnit,
      handleMusicUnitChange: handleMusicUnitChange,
      startPoint: startPoint,
      handleChangeStartPoint: setStartPoint,
      bpm: bpm,
      handleChangeBpm: setBpm,
      source: source,
      handleChangeSource: setSource,
      difficulty: difficulty,
      handleChangeDifficulty: setDifficulty,
      transposition: transposition,
      handleChangeTransposition: setTransposition,
      tablature: tablature,
      handleTestCreateTab: handleTestCreateTab,
      handleSaveInLocalStorage: handleSaveInLocalStorage,
      handleLoadFromLocalStorage: handleLoadFromLocalStorage,
    }
  }, [
    songTabs,
    getTabsBySongIsLoading,
    getTabsBySongIsError,
    createTabIsLoading,
    musicUnits,
    setMusicUnits,
    handleAddNewMusicUnit,
    handleRemoveMusicUnit,
    handleMusicUnitChange,
    handleDoCreateTab,
    startPoint,
    setStartPoint,
    bpm,
    setBpm,
    source,
    setSource,
    difficulty,
    setDifficulty,
    transposition,
    setTransposition,
    tablature,
    handleTestCreateTab,
    handleSaveInLocalStorage,
    handleLoadFromLocalStorage,
  ])
}
