import { ChordName, MusicUnitChordWithId } from '@noteable/types';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

import { MusicUnitEditor } from './music-unit-editor';

type CreateMusicUnitsSectionProps = {
  musicUnits: MusicUnitChordWithId[];
  handleAddNewMusicUnit: () => void;
  handleRemoveNewMusicUnit: (id: number) => void;
  handleMusicUnitChange: (id: number, self: ChordName, dur: number) => void;
  handleSaveInLocalStorage: () => void;
  handleLoadFromLocalStorage: () => void;
};

export function CreateMusicUnitsSection({
  musicUnits,
  handleAddNewMusicUnit,
  handleMusicUnitChange,
  handleRemoveNewMusicUnit,
  handleSaveInLocalStorage,
  handleLoadFromLocalStorage,
}: CreateMusicUnitsSectionProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant={'h5'} className={'text-center'} sx={{ mb: 2 }}>
        Admin: Create Tab
      </Typography>
      <Button onClick={handleSaveInLocalStorage}>SAVE</Button>
      <Button onClick={handleLoadFromLocalStorage}>LOAD</Button>
      <div>
        {musicUnits.map((mu) => (
          <MusicUnitEditor
            key={mu.id}
            musicUnit={mu}
            handleMusicUnitChange={handleMusicUnitChange}
            handleRemoveNewMusicUnit={handleRemoveNewMusicUnit}
          />
        ))}
      </div>

      <Stack direction={'row'} spacing={1} sx={{ mt: 2 }}>
        <Button variant={'outlined'} onClick={handleAddNewMusicUnit}>
          New
        </Button>
      </Stack>
    </Box>
  );
}
