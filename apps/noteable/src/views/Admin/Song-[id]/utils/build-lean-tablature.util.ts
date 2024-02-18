import {
  Difficulty,
  LeanTablature,
  MusicUnitChordWithId,
  Transposition,
} from '@noteable/types';

type buildLeanTablatureInput = {
  musicUnitsChordWithId: MusicUnitChordWithId[];
  source: string;
  difficulty: Difficulty;
  transposition: Transposition;
  startPoint: number;
  bpm: number;
};

export function buildLeanTablatureUtil({
  bpm,
  source,
  difficulty,
  startPoint,
  transposition,
  musicUnitsChordWithId,
}: buildLeanTablatureInput): LeanTablature {
  if (musicUnitsChordWithId.length > 0) {
    musicUnitsChordWithId[0].bpm = bpm;
    musicUnitsChordWithId[0].syncPnt = new Date(startPoint).toISOString();
    musicUnitsChordWithId[0].timeSig = {
      top: 4,
      bottom: 4,
    };
  }

  return {
    difficulty: difficulty,
    tuning: 'EADGBE',
    transposition: transposition,
    source: source,
    type: 'guitar',
    musicUnits: [...musicUnitsChordWithId],
  };
}
