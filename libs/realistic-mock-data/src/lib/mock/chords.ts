import {Chord, GuitarChordDefinition} from "@noteable/types";

// MAJOR CHORDS

const C_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 2, fret: 1 },
        { string: 4, fret: 2 },
        { string: 5, fret: 3 },
    ],
    mutedStrings: [6],
    usability: 0,
};

const C:Chord = {
    name: 'C',
    definitions: [ C_DEF ],
};

const Cs_DEF: GuitarChordDefinition = {
  bar: 4,
  barHeight: 5,
  fingerPositions: [
    { string: 2, fret: 3 },
    { string: 3, fret: 3 },
    { string: 4, fret: 3 },
  ],
  mutedStrings: [6],
  usability: 0,
};

const Cs:Chord = {
  name: 'C#',
  definitions: [ Cs_DEF ],
};

const D_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 1, fret: 2 },
    { string: 2, fret: 3 },
    { string: 3, fret: 2 },
  ],
  mutedStrings: [6, 5],
  usability: 0,
}

const D: Chord = {
  name: 'D',
  definitions: [ D_DEF ],
}

const Ds_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 1, fret: 3 },
    { string: 2, fret: 4 },
    { string: 3, fret: 3 },
    { string: 4, fret: 1 },
  ],
  mutedStrings: [6, 5],
  usability: 0,
}

const Ds: Chord = {
  name: 'D#',
  definitions: [ Ds_DEF ],
}

const E_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 3, fret: 1 },
    { string: 4, fret: 2 },
    { string: 5, fret: 2 },
  ],
  usability: 0,
}

const E: Chord = {
  name: 'E',
  definitions: [ E_DEF ],
}

const F_DEF: GuitarChordDefinition = {
  bar: 1,
  fingerPositions: [
    { string: 3, fret: 2 },
    { string: 4, fret: 3 },
    { string: 5, fret: 3 },
  ],
  usability: 0,
}

const F: Chord = {
  name: 'F',
  definitions: [ F_DEF ],
}

const Fs_DEF: GuitarChordDefinition = {
  bar: 2,
  fingerPositions: [
    { string: 3, fret: 2 },
    { string: 4, fret: 3 },
    { string: 5, fret: 3 },
  ],
  usability: 0,
}

const Fs: Chord = {
  name: 'F#',
  definitions: [ Fs_DEF ],
}

const G_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 1, fret: 3 },
        { string: 5, fret: 2 },
        { string: 6, fret: 3 },
    ],
    usability: 0,
}

const G: Chord = {
    name: 'G',
    definitions: [ G_DEF ],
}

const Gs_DEF: GuitarChordDefinition = {
  bar: 4,
  fingerPositions: [
    { string: 3, fret: 2 },
    { string: 4, fret: 3 },
    { string: 5, fret: 3 },
  ],
  usability: 0,
}

const Gs: Chord = {
  name: 'G#',
  definitions: [ Gs_DEF ],
}

const A_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 2, fret: 2 },
    { string: 3, fret: 2 },
    { string: 4, fret: 2 },
  ],
  mutedStrings: [6],
  usability: 0,
}

const A: Chord = {
  name: 'A',
  definitions: [ A_DEF ],
}

const As_DEF: GuitarChordDefinition = {
  bar: 1,
  barHeight: 5,
  fingerPositions: [
    { string: 2, fret: 3 },
    { string: 3, fret: 3 },
    { string: 4, fret: 3 },
  ],
  mutedStrings: [6],
  usability: 0,
}

const As: Chord = {
  name: 'A#',
  definitions: [ As_DEF ],
}

const B_DEF: GuitarChordDefinition = {
  bar: 2,
  barHeight: 5,
  fingerPositions: [
    { string: 2, fret: 3 },
    { string: 3, fret: 3 },
    { string: 4, fret: 3 },
  ],
  mutedStrings: [6],
  usability: 0,
}

const B: Chord = {
  name: 'B',
  definitions: [ B_DEF ],
}

// MINOR CHORDS

const Cm_DEF: GuitarChordDefinition = {
  bar: 3,
  barHeight: 5,
  fingerPositions: [
    {string: 2, fret: 2},
    {string: 3, fret: 3},
    {string: 4, fret: 3},
  ],
  mutedStrings: [6],
  usability: 0,
}

const Cm: Chord = {
  name: 'Cm',
  definitions: [Cm_DEF],
}

const Csm_DEF: GuitarChordDefinition = {
  bar: 4,
  barHeight: 5,
  fingerPositions: [
    {string: 2, fret: 2},
    {string: 3, fret: 3},
    {string: 4, fret: 3},
  ],
  mutedStrings: [6],
  usability: 0,
}

const Csm: Chord = {
  name: 'C#m',
  definitions: [Csm_DEF]
}

const Dm_DEF: GuitarChordDefinition = {
  fingerPositions: [
    {string: 1, fret: 1},
    {string: 2, fret: 3},
    {string: 3, fret: 2},
  ],
  mutedStrings: [6, 5],
  usability: 0,
}

const Dm: Chord = {
  name: 'Dm',
  definitions: [Dm_DEF]
}

const Dsm_DEF: GuitarChordDefinition = {
  fingerPositions: [
    {string: 1, fret: 2},
    {string: 2, fret: 4},
    {string: 3, fret: 3},
    {string: 4, fret: 1},
  ],
  mutedStrings: [6, 5],
  usability: 0,
}

const Dsm: Chord = {
  name: 'D#m',
  definitions: [Dsm_DEF],
}

const Em_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 4, fret: 2 },
    { string: 5, fret: 2 },
  ],
  usability: 0,
}

const Em: Chord = {
  name: 'Em',
  definitions: [Em_DEF],
}

const Fm_DEF: GuitarChordDefinition = {
  bar: 1,
  fingerPositions: [
    { string: 4, fret: 3 },
    { string: 5, fret: 3 },
  ],
  usability: 0,
}

const Fm: Chord = {
  name: 'Fm',
  definitions: [Fm_DEF],
}

const Fsm_DEF: GuitarChordDefinition = {
  bar: 2,
  fingerPositions: [
    { string: 4, fret: 3 },
    { string: 5, fret: 3 },
  ],
  usability: 0,
}

const Fsm: Chord = {
  name: 'F#m',
  definitions: [Fsm_DEF],
}

const Gm_DEF: GuitarChordDefinition = {
  bar: 3,
  fingerPositions: [
    { string: 4, fret: 3 },
    { string: 5, fret: 3 },
  ],
  usability: 0,
}

const Gm: Chord = {
  name: 'Gm',
  definitions: [Gm_DEF],
}

const Gsm_DEF: GuitarChordDefinition = {
  bar: 4,
  fingerPositions: [
    { string: 4, fret: 3 },
    { string: 5, fret: 3 },
  ],
  usability: 0,
}

const Gsm: Chord = {
  name: 'G#m',
  definitions: [Gsm_DEF],
}

const Am_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 2, fret: 1 },
        { string: 3, fret: 2 },
        { string: 4, fret: 2 },
    ],
  mutedStrings: [6],
    usability: 0,
}

const Am: Chord = {
    name: 'Am',
    definitions: [ Am_DEF ],
}

const Asm_DEF: GuitarChordDefinition = {
  bar: 1,
  barHeight: 5,
  fingerPositions: [
    { string: 2, fret: 2 },
    { string: 3, fret: 3 },
    { string: 4, fret: 3 },
  ],
  mutedStrings: [6],
  usability: 0,
}

const Asm: Chord = {
  name: 'A#m',
  definitions: [ Asm_DEF ],
}

const Bm_DEF: GuitarChordDefinition = {
    bar: 2,
    barHeight: 5,
    fingerPositions: [
        { string: 2, fret: 2 },
        { string: 3, fret: 3 },
        { string: 4, fret: 3 },
    ],
    mutedStrings: [6],
    usability: 0,
}

const Bm: Chord = {
    name: 'Bm',
    definitions: [ Bm_DEF ],
}

// MAJOR 7 CHORDS

const C7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 2, fret: 1},
    { string: 3, fret: 3},
    { string: 4, fret: 2},
    { string: 5, fret: 3},
  ],
  mutedStrings: [6],
  usability: 0,
}

const C7: Chord = {
  name: 'C7',
  definitions: [ C7_DEF ],
}

const Cs7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 1, fret: 2},
    { string: 3, fret: 2},
    { string: 4, fret: 1},
    { string: 5, fret: 2},
  ],
  mutedStrings: [6],
  usability: 0,
}

const Cs7: Chord = {
  name: 'C#7',
  definitions: [ Cs7_DEF ],
}

const D7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 1, fret: 2},
    { string: 2, fret: 1},
    { string: 3, fret: 2},
  ],
  mutedStrings: [6, 5],
  usability: 0,
}

const D7: Chord = {
  name: 'D7',
  definitions: [D7_DEF],
}

const Ds7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    {string: 1, fret: 3},
    {string: 2, fret: 2},
    {string: 4, fret: 1},
  ],
  mutedStrings: [6, 5],
  usability: 0,
}

const Ds7: Chord = {
  name: 'D#7',
  definitions: [Ds7_DEF],
}

export const CHORDS = [
  C,
  Cs,
  D,
  Ds,
  E,
  F,
  Fs,
  G,
  Gs,
  A,
  As,
  B,

  Cm,
  Csm,
  Dm,
  Dsm,
  Em,
  Fm,
  Fsm,
  Gm,
  Gsm,
  Am,
  Asm,
  Bm,
]
