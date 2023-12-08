import React from "react";
import {Button, Divider, Stack} from "@mui/material";
import {NoteableViewer} from "@noteable/react-components";

import {useAdminSongById} from "./hook";
import {CreateTabMetaDataSection, CreateMusicUnitsSection} from "./components";

export function AdminSongById(){
  const {
    getTabsBySongIsLoading,
    doCreateTab,
    createTabIsLoading,
    musicUnits,
    handleAddNewMusicUnit,
    handleRemoveMusicUnit,
    handleMusicUnitChange,
    startPoint,
    handleChangeStartPoint,
    bpm,
    handleChangeBpm,
    source,
    handleChangeSource,
    difficulty,
    handleChangeDifficulty,
    transposition,
    handleChangeTransposition,
    tablature,
    handleTestCreateTab,
    handleSaveInLocalStorage,
    handleLoadFromLocalStorage,
  } = useAdminSongById();

  return(
    <>
      {
        getTabsBySongIsLoading ?
          (
            <div>Loading...</div>
          ):(
          <>
            <CreateTabMetaDataSection
              startPoint={startPoint}
              handleChangeStartPoint={handleChangeStartPoint}
              bpm={bpm}
              handleChangeBpm={handleChangeBpm}
              source={source}
              handleChangeSource={handleChangeSource}
              difficulty={difficulty}
              handleChangeDifficulty={handleChangeDifficulty}
              transposition={transposition}
              handleChangeTransposition={handleChangeTransposition}
            />
            <CreateMusicUnitsSection
              musicUnits={musicUnits}
              handleAddNewMusicUnit={handleAddNewMusicUnit}
              handleRemoveNewMusicUnit={handleRemoveMusicUnit}
              handleMusicUnitChange={handleMusicUnitChange}
              handleSaveInLocalStorage={handleSaveInLocalStorage}
              handleLoadFromLocalStorage={handleLoadFromLocalStorage}
            />
            {
              tablature && (
                <NoteableViewer tablature={tablature} mode={'interactive'}/>
              )
            }
            <Stack direction={'row-reverse'} spacing={1} sx={{mt:2}}>
              <Button
                variant={"contained"}
                onClick={doCreateTab}
                disabled={createTabIsLoading}
              >
                Create
              </Button>
              <Button
                variant={"outlined"}
                onClick={handleTestCreateTab}
                disabled={false}
              >
                Test
              </Button>
            </Stack>
            <Divider variant={"middle"}/>
          </>
        )
      }
    </>
  )
}
