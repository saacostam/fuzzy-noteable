import React from "react";
import {Link} from "react-router-dom";
import {Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import {LibraryMusic} from "@mui/icons-material";

import {NoteableViewer} from "@noteable/react-components";

import {useAdminSongById} from "./hook";
import {CreateTabMetaDataSection, CreateMusicUnitsSection} from "./components";

type TabListItemProps = {
  id: string;
  songName: string;
}

export function TabListItem({id, songName}: TabListItemProps){
  return (
    <Link
      to={`/tab/${id}`}
    >
      <ListItemButton>
        <ListItemIcon>
          <LibraryMusic
            fontSize={'large'}
            color={"secondary"}
          />
        </ListItemIcon>
        <ListItemText
          primary={songName}
          secondary={id}
        />
      </ListItemButton>
    </Link>
  )
}

export function AdminSongById(){
  const {
    songName,
    songTabs,
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
            <Stack direction={'row-reverse'} spacing={1} sx={{mt:2, mb: 2}}>
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
            <Typography variant={'h5'} className={'text-center'} sx={{mt:2}}>Uploaded Tabs</Typography>
            <List
              dense={true}
            >
              {
                songTabs.map(songTab => (
                  <TabListItem
                    id={songTab.id}
                    key={songTab.id}
                    songName={songName}
                  />
                ))
              }
            </List>
          </>
        )
      }
    </>
  )
}
