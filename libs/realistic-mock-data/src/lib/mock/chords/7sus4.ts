import { Chord, GuitarChordDefinition } from '@noteable/types';
import { freemem } from 'os';

// 7 SUS 4

const C7sus4_DEF: GuitarChordDefinition = {
    bar: 3,
    barHeight: 5,
    fingerPositions: [
        { string: 2, fret: 4},
        { string: 4, fret: 3},
    ],
    mutedStrings: [6],
    usability: 0,
}

const C7sus4: Chord = {
    name: 'C7sus4',
    definitions: [ C7sus4_DEF ],
}

const Cs7sus4_DEF: GuitarChordDefinition = {
    bar: 4,
    barHeight: 5,
    fingerPositions: [
        { string: 2, fret: 4},
        { string: 4, fret: 3},
    ],
    mutedStrings: [6],
    usability: 0,
}

const Cs7sus4: Chord = {
    name: 'C#7sus4',
    definitions: [ Cs7sus4_DEF ],
}

const D7sus4_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 1, fret: 3},
        { string: 2, fret: 1},
        { string: 3, fret: 2},
    ],
    mutedStrings: [6, 5],
    usability: 0,
}

const D7sus4: Chord = {
    name: 'D7sus4',
    definitions: [ D7sus4_DEF ],
}

const Ds7sus4_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 1, fret: 4},
        { string: 2, fret: 2},
        { string: 3, fret: 3},
        { string: 4, fret: 1},
    ],
    mutedStrings: [6, 5],
    usability: 0,
}

const Ds7sus4: Chord = {
    name: 'D#7sus4',
    definitions: [ Ds7sus4_DEF ],
}

const E7sus4_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 3, fret: 2},
    ],
    usability: 0,
}

const E7sus4: Chord = {
    name: 'E7sus4',
    definitions: [ E7sus4_DEF ],
}

const F7sus4_DEF: GuitarChordDefinition = {
    bar: 1,
    fingerPositions: [
        { string: 3, fret: 3},
    ],
    usability: 0,
}

const F7sus4: Chord = {
    name: 'F7sus4',
    definitions: [ F7sus4_DEF ],
}

const Fs7sus4_DEF: GuitarChordDefinition = {
    bar: 2,
    fingerPositions: [
        { string: 3, fret: 3},
    ],
    usability: 0,
}

const Fs7sus4: Chord = {
    name: 'F#7sus4',
    definitions: [ Fs7sus4_DEF ],
}

const G7sus4_DEF: GuitarChordDefinition = {
    bar: 3,
    fingerPositions: [
        { string: 3, fret: 3},
    ],
    usability: 0,
}

const G7sus4: Chord = {
    name: 'G7sus4',
    definitions: [ G7sus4_DEF ],
}

const Gs7sus4_DEF: GuitarChordDefinition = {
    bar: 4,
    fingerPositions: [
        { string: 3, fret: 3},
    ],
    usability: 0,
}

const Gs7sus4: Chord = {
    name: 'G#7sus4',
    definitions: [ Gs7sus4_DEF ],
}

const A7sus4_DEF: GuitarChordDefinition = {
    fingerPositions: [
        { string: 2, fret: 3},
        { string: 4, fret: 2},
    ],
    mutedStrings: [6],
    usability: 0,
}

const A7sus4: Chord = {
    name: 'A7sus4',
    definitions: [ A7sus4_DEF ],
}

const As7sus4_DEF: GuitarChordDefinition = {
    bar: 1,
    barHeight: 5,
    fingerPositions: [
        { string: 2, fret: 4},
    ],
    mutedStrings: [6],
    usability: 0,
}

const As7sus4: Chord = {
    name: 'A#7sus4',
    definitions: [ As7sus4_DEF ],
}

const B7sus4_DEF: GuitarChordDefinition = {
    bar: 2,
    barHeight: 5,
    fingerPositions: [
        { string: 2, fret: 4},
    ],
    mutedStrings: [6],
    usability: 0,
}

const B7sus4: Chord = {
    name: 'B7sus4',
    definitions: [ B7sus4_DEF ],
}

export const CHORDS_7SUS4 = [
    C7sus4,
    Cs7sus4,
    D7sus4,
    Ds7sus4,
    E7sus4,
    F7sus4,
    Fs7sus4,
    G7sus4,
    Gs7sus4,
    A7sus4,
    As7sus4,
    B7sus4,
]
