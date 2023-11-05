import {useAdminSongById} from "./hook";
import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import {ChordName, MusicUnitChordWithId} from "@noteable/types";

type CreateTabSectionProps = {
  createTabIsLoading: boolean;
  musicUnits: MusicUnitChordWithId[];
  doCreateTab: () => void;
  handleAddNewMusicUnit: () => void;
  handleRemoveNewMusicUnit: (id: number) => void;
  handleMusicUnitChange: (id: number, self: ChordName, dur: number) => void;
};

export function CreateTabSection(
  {
    musicUnits,
    handleAddNewMusicUnit,
    doCreateTab,
    createTabIsLoading,
  }: CreateTabSectionProps){
  return (
    <Box sx={{p: 2}}>
      <Typography variant={'h5'} className={'text-center'} sx={{mb:2}}>Admin: Create Tab</Typography>
      {
        musicUnits.map(mu => (<div key={mu.id}>{mu.id}</div>))
      }

      <Stack direction={'row'} spacing={1} sx={{mt:2}}>
        <Button
          variant={"contained"}
          onClick={handleAddNewMusicUnit}
        >
          New
        </Button>
        <Button
          variant={"contained"}
          onClick={doCreateTab}
          disabled={createTabIsLoading}
        >
          Create
        </Button>
      </Stack>
    </Box>
  )
}

export function AdminSongById(){
  const {
    getTabsBySongIsLoading,
    doCreateTab,
    createTabIsLoading,
    musicUnits,
    handleAddNewMusicUnit,
    handleRemoveMusicUnit,
    handleMusicUnitChange,
  } = useAdminSongById();

  return(
    <>
      {
        getTabsBySongIsLoading ?
          (
            <div>Loading...</div>
          ):(
          <>
            <CreateTabSection
              createTabIsLoading={createTabIsLoading}
              musicUnits={musicUnits}
              doCreateTab={doCreateTab}
              handleAddNewMusicUnit={handleAddNewMusicUnit}
              handleRemoveNewMusicUnit={handleRemoveMusicUnit}
              handleMusicUnitChange={handleMusicUnitChange}
            />
            <Divider variant={"middle"}/>
          </>
        )
      }
    </>
  )
}
