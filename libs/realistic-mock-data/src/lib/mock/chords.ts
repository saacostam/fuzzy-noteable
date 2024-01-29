import {Chord, GuitarChordDefinition} from "@noteable/types";

// SILENT CHORD

const SILENCE_DEF: GuitarChordDefinition = {
  fingerPositions: [],
  usability: 0,
}

const SILENCE: Chord = {
  name: 'SILENCE',
  definitions: [ SILENCE_DEF ],
}

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
  initialFret: 3,
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
  definitions: [ Ds7_DEF ],
}

const E7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 3, fret: 1},
    { string: 5, fret: 2},
  ],
  usability: 0,
}

const E7: Chord = {
  name: 'E7',
  definitions: [ E7_DEF ],
}

const F7_DEF: GuitarChordDefinition = {
  bar: 1,
  fingerPositions: [
    { string: 3, fret: 2},
    { string: 5, fret: 3},
  ],
  usability: 0,
}

const F7: Chord = {
  name: 'F7',
  definitions: [ F7_DEF ],
}

const Fs7_DEF: GuitarChordDefinition = {
  bar: 2,
  fingerPositions: [
    { string: 3, fret: 2},
    { string: 5, fret: 3},
  ],
  usability: 0,
}

const Fs7: Chord = {
  name: 'F#7',
  definitions: [ Fs7_DEF ],
}

const G7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 1, fret: 1},
    { string: 5, fret: 2},
    { string: 6, fret: 3},
  ],
  usability: 0,
}

const G7: Chord = {
  name: 'G7',
  definitions: [ G7_DEF ],
}

const Gs7_DEF: GuitarChordDefinition = {
  bar: 4,
  fingerPositions: [
    { string: 3, fret: 2},
    { string: 5, fret: 3},
  ],
  usability: 0,
}

const Gs7: Chord = {
  name: 'G#7',
  definitions: [ Gs7_DEF ],
}

const A7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 2, fret: 2},
    { string: 4, fret: 2},
  ],
  mutedStrings: [6],
  usability: 0,
}

const A7: Chord = {
  name: 'A7',
  definitions: [ A7_DEF ],
}

const As7_DEF: GuitarChordDefinition = {
  bar: 1,
  barHeight: 5,
  fingerPositions: [
    { string: 2, fret: 3},
    { string: 4, fret: 3},
  ],
  mutedStrings: [6],
  usability: 0,
}

const As7: Chord = {
  name: 'A#7',
  definitions: [ As7_DEF ],
}

const B7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 1, fret: 2},
    { string: 3, fret: 2},
    { string: 4, fret: 1},
    { string: 5, fret: 2},
  ],
  mutedStrings: [6],
  usability: 0,
}

const B7: Chord = {
  name: 'B7',
  definitions: [ B7_DEF ],
}

// MINOR 7TH CHORDS

const Cm7_DEF: GuitarChordDefinition = {
  bar: 3,
  barHeight: 5,
  fingerPositions: [
    { string: 2, fret: 2},
    { string: 4, fret: 3},
  ],
  mutedStrings: [6],
  usability: 0,
}

const Cm7: Chord = {
  name: 'Cm7',
  definitions: [Cm7_DEF],
}

const Csm7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 3, fret: 1},
    { string: 4, fret: 2},
    { string: 5, fret: 4},
  ],
  mutedStrings: [6],
  usability: 0,
}

const Csm7: Chord = {
  name: 'C#m7',
  definitions: [ Csm7_DEF ],
}

const Dm7_DEF: GuitarChordDefinition = {
  bar: 1,
  barHeight: 2,
  fingerPositions: [
    { string: 3, fret: 2},
  ],
  mutedStrings: [6, 5],
  usability: 0,
}

const Dm7: Chord = {
  name: 'Dm7',
  definitions: [ Dm7_DEF ],
}

const Dsm7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 1, fret: 2},
    { string: 2, fret: 2},
    { string: 3, fret: 3},
    { string: 4, fret: 1},
  ],
  mutedStrings: [6, 5],
  usability: 0,
}

const Dsm7: Chord = {
  name: 'D#m7',
  definitions: [ Dsm7_DEF ],
}

const Em7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 5, fret: 2},
  ],
  usability: 0,
}

const Em7: Chord = {
  name: 'Em7',
  definitions: [ Em7_DEF ],
}

const Fm7_DEF: GuitarChordDefinition = {
  bar: 1,
  fingerPositions: [
    { string: 5, fret: 3},
  ],
  usability: 0,
}

const Fm7: Chord = {
  name: 'Fm7',
  definitions: [ Fm7_DEF ],
}

const Fsm7_DEF: GuitarChordDefinition = {
  bar: 2,
  fingerPositions: [
    { string: 5, fret: 3},
  ],
  usability: 0,
}

const Fsm7: Chord = {
  name: 'F#m7',
  definitions: [ Fsm7_DEF ],
}

const Gm7_DEF: GuitarChordDefinition = {
  bar: 3,
  fingerPositions: [
    { string: 5, fret: 3},
  ],
  usability: 0,
}

const Gm7: Chord = {
  name: 'Gm7',
  definitions: [ Gm7_DEF ],
}

const Gsm7_DEF: GuitarChordDefinition = {
  bar: 4,
  fingerPositions: [
    { string: 5, fret: 3},
  ],
  usability: 0,
}

const Gsm7: Chord = {
  name: 'G#m7',
  definitions: [ Gsm7_DEF ],
}

const Am7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 2, fret: 1},
    { string: 4, fret: 2},
  ],
  mutedStrings: [6],
  usability: 0,
}

const Am7: Chord = {
  name: 'Am7',
  definitions: [ Am7_DEF ],
}

const Asm7_DEF: GuitarChordDefinition = {
  bar: 1,
  barHeight: 5,
  fingerPositions: [
    { string: 2, fret: 2},
    { string: 4, fret: 3},
  ],
  mutedStrings: [6],
  usability: 0,
}

const Asm7: Chord = {
  name: 'A#m7',
  definitions: [ Asm7_DEF ],
}

const Bm7_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 1, fret: 2},
    { string: 3, fret: 2},
    { string: 5, fret: 2},
  ],
  mutedStrings: [6],
  usability: 0,
}

const Bm7: Chord = {
  name: 'Bm7',
  definitions: [ Bm7_DEF ],
}

export const CHORDS = [
  SILENCE,

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

  C7,
  Cs7,
  D7,
  Ds7,
  E7,
  F7,
  Fs7,
  G7,
  Gs7,
  A7,
  As7,
  B7,

  Cm7,
  Csm7,
  Dm7,
  Dsm7,
  Em7,
  Fm7,
  Fsm7,
  Gm7,
  Gsm7,
  Am7,
  Asm7,
  Bm7,
]
