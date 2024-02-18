import {
  AllChordSuffixes,
  ChordName,
  ChordSuffix,
  MusicUnitChordWithId,
  Note,
  SortedNotes,
} from '@noteable/types';
import { parseChord } from '@noteable/noteable-core';
import React, { ChangeEvent, useCallback } from 'react';
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';

type MusicUnitEditorProps = {
  musicUnit: MusicUnitChordWithId;
  handleRemoveNewMusicUnit: (id: number) => void;
  handleMusicUnitChange: (id: number, self: ChordName, dur: number) => void;
};

export function MusicUnitEditor({
  musicUnit,
  handleMusicUnitChange,
  handleRemoveNewMusicUnit,
}: MusicUnitEditorProps) {
  const { self, dur } = musicUnit;
  const { note, suffix } = parseChord(self);

  const handleNoteOnChange = useCallback(
    (e: SelectChangeEvent) => {
      const note = e.target.value as Note;
      const { suffix } = parseChord(musicUnit.self);
      handleMusicUnitChange(musicUnit.id, `${note}${suffix}`, musicUnit.dur);
    },
    [handleMusicUnitChange, musicUnit]
  );

  const handleSuffixOnChange = useCallback(
    (e: SelectChangeEvent) => {
      const suffix = e.target.value as ChordSuffix;
      const { note } = parseChord(musicUnit.self);
      handleMusicUnitChange(musicUnit.id, `${note}${suffix}`, musicUnit.dur);
    },
    [handleMusicUnitChange, musicUnit]
  );

  const handleDurationOnChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const dur = e.target.value;
      handleMusicUnitChange(musicUnit.id, musicUnit.self, +dur);
    },
    [handleMusicUnitChange, musicUnit]
  );

  const handleOnClickDelete = useCallback(
    () => handleRemoveNewMusicUnit(musicUnit.id),
    [handleRemoveNewMusicUnit, musicUnit]
  );

  return (
    <div className={'mb-2'}>
      <Stack direction={'row'} spacing={1}>
        <Select
          size={'small'}
          label={'Note'}
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleNoteOnChange}
          value={note}
          variant={'standard'}
        >
          {SortedNotes.map((note) => (
            <MenuItem value={note} key={note}>
              {note}
            </MenuItem>
          ))}
        </Select>
        <Select
          size={'small'}
          label={'Suffix'}
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleSuffixOnChange}
          value={suffix}
          variant={'standard'}
        >
          {AllChordSuffixes.map((chordSuffix) => (
            <MenuItem value={chordSuffix} key={chordSuffix}>
              {chordSuffix}
            </MenuItem>
          ))}
        </Select>
        <TextField
          type={'number'}
          size={'small'}
          label={'Duration'}
          fullWidth
          sx={{ mb: 2 }}
          value={dur}
          onChange={handleDurationOnChange}
          variant={'standard'}
        />
        <Button onClick={handleOnClickDelete} variant={'outlined'}>
          🗑
        </Button>
      </Stack>
    </div>
  );
}
