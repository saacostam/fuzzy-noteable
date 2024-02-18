import React, { ChangeEvent, useCallback } from 'react';
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { AllDifficulties, Difficulty, Transposition } from '@noteable/types';

type CreateTabMetaDataSectionProps = {
  startPoint: number;
  handleChangeStartPoint: (newVal: number) => void;
  bpm: number;
  handleChangeBpm: (newVal: number) => void;
  source: string;
  handleChangeSource: (newVal: string) => void;
  difficulty: string;
  handleChangeDifficulty: (newVal: Difficulty) => void;
  transposition: Transposition;
  handleChangeTransposition: (newVal: Transposition) => void;
};

type CommonChangeInputEventType = ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>;

export function CreateTabMetaDataSection({
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
}: CreateTabMetaDataSectionProps) {
  const handleStartPointOnChange = useCallback(
    (e: CommonChangeInputEventType) => handleChangeStartPoint(+e.target.value),
    [handleChangeStartPoint]
  );

  const handleBpmOnChange = useCallback(
    (e: CommonChangeInputEventType) => handleChangeBpm(+e.target.value),
    [handleChangeBpm]
  );

  const handleSourceOnChange = useCallback(
    (e: CommonChangeInputEventType) => handleChangeSource(e.target.value),
    [handleChangeSource]
  );

  const handleDifficultyOnChange = useCallback(
    (e: SelectChangeEvent<string>) =>
      handleChangeDifficulty(e.target.value as Difficulty),
    [handleChangeDifficulty]
  );

  const handleTranspositionOnChange = useCallback(
    (e: CommonChangeInputEventType) => {
      const value = +e.target.value;
      if (value < 0 || value > 12) return;
      handleChangeTransposition(value as Transposition);
    },
    [handleChangeTransposition]
  );

  return (
    <>
      <Typography variant={'h5'} className={'text-center'} sx={{ mb: 2 }}>
        Tab Meta Data
      </Typography>
      <Stack direction={'row'} spacing={1} sx={{ mb: 2 }}>
        <TextField
          type={'number'}
          size={'small'}
          label={'Start Point'}
          fullWidth
          sx={{ mb: 2 }}
          value={startPoint}
          onChange={handleStartPointOnChange}
        />
        <TextField
          type={'number'}
          size={'small'}
          label={'BPM'}
          fullWidth
          sx={{ mb: 2 }}
          value={bpm}
          onChange={handleBpmOnChange}
        />
      </Stack>
      <Stack direction={'row'} spacing={1} sx={{ mb: 2 }}>
        <TextField
          size={'small'}
          label={'Youtube Source'}
          fullWidth
          sx={{ mb: 2 }}
          value={source}
          onChange={handleSourceOnChange}
        />
        <Select
          size={'small'}
          label={'Difficulty'}
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleDifficultyOnChange}
          value={difficulty}
        >
          {AllDifficulties.map((difficulty) => (
            <MenuItem value={difficulty} key={difficulty}>
              {difficulty}
            </MenuItem>
          ))}
        </Select>
        <TextField
          type={'number'}
          size={'small'}
          label={'Transposition'}
          fullWidth
          sx={{ mb: 2 }}
          value={transposition}
          onChange={handleTranspositionOnChange}
        />
      </Stack>
    </>
  );
}
