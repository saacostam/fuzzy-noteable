import {Chord, GuitarChordDefinition} from "@noteable/types";

const C_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 2, fret: 1 },
        { string: 4, fret: 2 },
        { string: 5, fret: 3 },
    ],
    usability: 0,
};

export const C:Chord = {
    name: { note: 'C', suffix: '' },
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

export const G: Chord = {
    name: { note: 'G', suffix: '' },
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

export const Am: Chord = {
    name: { note: 'A', suffix: 'm' },
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

export const F: Chord = {
    name: { note: 'F', suffix: '' },
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

export const D: Chord = {
    name: { note: 'D', suffix: '' },
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

export const A: Chord = {
    name: { note: 'A', suffix: '' },
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

export const Bm: Chord = {
    name: { note: 'B', suffix: 'm' },
    definitions: [ Bm_DEF ],
}

const Em_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 4, fret: 2 },
        { string: 5, fret: 2 },
    ],
    usability: 0,
}

export const Em: Chord = {
    name: { note: 'E', suffix: 'm'},
    definitions: [Em_DEF],
}
