import { Chord, GuitarChordDefinition } from '@noteable/types';

// MAJOR 9TH

const C9_DEF: GuitarChordDefinition = {
    bar: 3,
    barHeight: 5,
    fingerPositions: [
        { string: 4, fret: 3},
    ],
    mutedStrings: [6],
    usability: 0,
}

const C9: Chord = {
    name: 'C9',
    definitions: [C9_DEF],
}

const Cs9_DEF: GuitarChordDefinition = {
    bar: 4,
    barHeight: 5,
    fingerPositions: [
        { string: 4, fret: 3},
    ],
    mutedStrings: [6],
    usability: 0,
}

const Cs9: Chord = {
    name: 'C#9',
    definitions: [ Cs9_DEF ],
}

const D9_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 2, fret: 1},
        { string: 3, fret: 2},
    ],
    mutedStrings: [6, 5],
    usability: 0,
}

const D9: Chord = {
    name: 'D9',
    definitions: [ D9_DEF ],
}

const Ds9_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 1, fret: 1},
        { string: 2, fret: 2},
        { string: 4, fret: 1},
    ],
    mutedStrings: [6, 5],
    usability: 0,
}

const Ds9: Chord = {
    name: 'D#9',
    definitions: [ Ds9_DEF ],
}

const E9_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 1, fret: 2},
        { string: 3, fret: 1},
        { string: 5, fret: 2},
    ],
    usability: 0,
}

const E9: Chord = {
    name: 'E9',
    definitions: [ E9_DEF ],
}

const F9_DEF: GuitarChordDefinition = {
    bar: 1,
    fingerPositions: [
        { string: 1, fret: 3},
        { string: 3, fret: 2},
        { string: 5, fret: 3},
    ],
    usability: 0,
}

const F9: Chord = {
    name: 'F9',
    definitions: [ F9_DEF ],
}

const Fs9_DEF: GuitarChordDefinition = {
    bar: 2,
    fingerPositions: [
        { string: 1, fret: 3},
        { string: 3, fret: 2},
        { string: 5, fret: 3},
    ],
    usability: 0,
}

const Fs9: Chord = {
    name: 'F#9',
    definitions: [ Fs9_DEF ],
}

const G9_DEF: GuitarChordDefinition = {
    bar: 3,
    fingerPositions: [
        { string: 1, fret: 3},
        { string: 3, fret: 2},
        { string: 5, fret: 3},
    ],
    usability: 0,
}

const G9: Chord = {
    name: 'G9',
    definitions: [ G9_DEF ],
}

const Gs9_DEF: GuitarChordDefinition = {
    bar: 4,
    fingerPositions: [
        { string: 1, fret: 3},
        { string: 3, fret: 2},
        { string: 5, fret: 3},
    ],
    usability: 0,
}

const Gs9: Chord = {
    name: 'G#9',
    definitions: [ Gs9_DEF ],
}

const A9_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 4, fret: 2},
    ],
    mutedStrings: [6],
    usability: 0,
}

const A9: Chord = {
    name: 'A9',
    definitions: [ A9_DEF ],
}

const As9_DEF: GuitarChordDefinition = {
    bar: 1,
    barHeight: 5,
    fingerPositions: [
        { string: 4, fret: 3},
    ],
    mutedStrings: [6],
    usability: 0,
}

const As9: Chord = {
    name: 'A#9',
    definitions: [ As9_DEF ],
}

const B9_DEF: GuitarChordDefinition = {
    bar: 2,
    barHeight: 5,
    fingerPositions: [
        { string: 4, fret: 3},
    ],
    mutedStrings: [6],
    usability: 0,
}

const B9: Chord = {
    name: 'B9',
    definitions: [B9_DEF],
}

export const CHORDS_MAJOR9TH_MINOR9TH = [
    C9,
    Cs9,
    D9,
    Ds9,
    E9,
    F9,
    Fs9,
    G9,
    Gs9,
    A9,
    As9,
    B9,
]