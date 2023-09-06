import {Chord, GuitarChordDefinition} from "@noteable/types";

const C_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 2, fret: 1 },
        { string: 4, fret: 2 },
        { string: 5, fret: 3 },
    ],
    usability: 0,
};

const C:Chord = {
    name: 'C',
    definitions: [ C_DEF ],
};

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

const Am_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 2, fret: 1 },
        { string: 3, fret: 2 },
        { string: 4, fret: 2 },
    ],
    usability: 0,
}

const Am: Chord = {
    name: 'Am',
    definitions: [ Am_DEF ],
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

const D_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 1, fret: 2 },
        { string: 2, fret: 3 },
        { string: 3, fret: 2 },
    ],
    usability: 0,
}

const D: Chord = {
    name: 'D',
    definitions: [ D_DEF ],
}

const A_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 2, fret: 2 },
        { string: 3, fret: 2 },
        { string: 4, fret: 2 },
    ],
    usability: 0,
}

const A: Chord = {
    name: 'A',
    definitions: [ A_DEF ],
}

const Bm_DEF: GuitarChordDefinition = {
    bar: 2,
    fingerPositions: [
        { string: 2, fret: 3 },
        { string: 3, fret: 4 },
        { string: 4, fret: 4 },
    ],
    usability: 0,
}

const Bm: Chord = {
    name: 'Bm',
    definitions: [ Bm_DEF ],
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

export const CHORDS = [
  G,
  Em,
  Bm,
  Am,
  A,
  D,
  C,
  F,
]
