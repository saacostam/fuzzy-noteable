import { Chord, GuitarChordDefinition } from '@noteable/types';

// SUS 2

const Csus2_DEF: GuitarChordDefinition = {
  bar: 3,
  barHeight: 5,
  fingerPositions: [
    { string: 3, fret: 3 },
    { string: 4, fret: 3 },
  ],
  mutedStrings: [6],
  usability: 0,
};

const Csus2: Chord = {
  name: 'Csus2',
  definitions: [Csus2_DEF],
};

const Cssus2_DEF: GuitarChordDefinition = {
  bar: 4,
  barHeight: 5,
  fingerPositions: [
    { string: 3, fret: 3 },
    { string: 4, fret: 3 },
  ],
  mutedStrings: [6],
  usability: 0,
};

const Cssus2: Chord = {
  name: 'C#sus2',
  definitions: [Cssus2_DEF],
};

const Dsus2_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 2, fret: 3 },
    { string: 3, fret: 2 },
  ],
  mutedStrings: [6, 5],
  usability: 0,
};

const Dsus2: Chord = {
  name: 'Dsus2',
  definitions: [Dsus2_DEF],
};

const Dssus2_DEF: GuitarChordDefinition = {
  bar: 1,
  barHeight: 4,
  fingerPositions: [
    { string: 2, fret: 4 },
    { string: 3, fret: 3 },
  ],
  mutedStrings: [6, 5],
  usability: 0,
};

const Dssus2: Chord = {
  name: 'D#sus2',
  definitions: [Dssus2_DEF],
};

const Esus2_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 3, fret: 4 },
    { string: 4, fret: 4 },
    { string: 5, fret: 2 },
  ],
  usability: 0,
};

const Esus2: Chord = {
  name: 'Esus2',
  definitions: [Esus2_DEF],
};

const Fsus2_DEF: GuitarChordDefinition = {
  bar: 3,
  barHeight: 4,
  fingerPositions: [
    { string: 2, fret: 4 },
    { string: 3, fret: 3 },
  ],
  mutedStrings: [6, 5],
  usability: 0,
};

const Fsus2: Chord = {
  name: 'Fsus2',
  definitions: [Fsus2_DEF],
};

const Fssus2_DEF: GuitarChordDefinition = {
  bar: 4,
  barHeight: 4,
  fingerPositions: [
    { string: 2, fret: 4 },
    { string: 3, fret: 3 },
  ],
  mutedStrings: [6, 5],
  usability: 0,
};

const Fssus2: Chord = {
  name: 'F#sus2',
  definitions: [Fssus2_DEF],
};

const Gsus2_DEF: GuitarChordDefinition = {
  bar: 5,
  barHeight: 4,
  fingerPositions: [
    { string: 2, fret: 4 },
    { string: 3, fret: 3 },
  ],
  mutedStrings: [6, 5],
  usability: 0,
};

const Gsus2: Chord = {
  name: 'Gsus2',
  definitions: [Gsus2_DEF],
};

const Gssus2_DEF: GuitarChordDefinition = {
  bar: 6,
  barHeight: 4,
  fingerPositions: [
    { string: 2, fret: 4 },
    { string: 3, fret: 3 },
  ],
  mutedStrings: [6, 5],
  usability: 0,
};

const Gssus2: Chord = {
  name: 'G#sus2',
  definitions: [Gssus2_DEF],
};

const Asus2_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 3, fret: 2 },
    { string: 4, fret: 2 },
  ],
  mutedStrings: [6],
  usability: 0,
};

const Asus2: Chord = {
  name: 'Asus2',
  definitions: [Asus2_DEF],
};

const Assus2_DEF: GuitarChordDefinition = {
  bar: 1,
  barHeight: 5,
  fingerPositions: [
    { string: 3, fret: 3 },
    { string: 4, fret: 3 },
  ],
  mutedStrings: [6],
  usability: 0,
};

const Assus2: Chord = {
  name: 'A#sus2',
  definitions: [Assus2_DEF],
};

const Bsus2_DEF: GuitarChordDefinition = {
  bar: 2,
  barHeight: 5,
  fingerPositions: [
    { string: 3, fret: 3 },
    { string: 4, fret: 3 },
  ],
  mutedStrings: [6],
  usability: 0,
};

const Bsus2: Chord = {
  name: 'Bsus2',
  definitions: [Bsus2_DEF],
};

export const CHORDS_SUS2 = [
  Csus2,
  Cssus2,
  Dsus2,
  Dssus2,
  Esus2,
  Fsus2,
  Fssus2,
  Gsus2,
  Gssus2,
  Asus2,
  Assus2,
  Bsus2,
];
