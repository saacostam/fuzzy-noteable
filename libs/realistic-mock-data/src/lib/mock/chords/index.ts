import { CHORDS_SILENCE_MAJOR_MINOR_MAJOR7TH_MINOR7TH } from './silence-major-minor-7th';
import { CHORDS_MAJOR9TH } from './major9th';
import { CHORDS_SUS2 } from './sus2';
import { CHORDS_7SUS4 } from './7sus4';

export const CHORDS = [
  ...CHORDS_SILENCE_MAJOR_MINOR_MAJOR7TH_MINOR7TH,
  ...CHORDS_MAJOR9TH,
  ...CHORDS_SUS2,
  ...CHORDS_7SUS4,
];
