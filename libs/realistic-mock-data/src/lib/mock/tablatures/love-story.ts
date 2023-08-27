import {Chord, GuitarChordDefinition, Song, Tablature, Tuning} from '@noteable/types';
import { v4 as uuid } from 'uuid';

const C_DEF: GuitarChordDefinition = {
  fingerPositions: [
    { string: 2, fret: 1 },
    { string: 4, fret: 2 },
    { string: 5, fret: 3 },
  ],
  usability: 0,
};

const C:Chord = {
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

const G: Chord = {
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

const Am: Chord = {
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

const F: Chord = {
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

const D: Chord = {
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

const A: Chord = {
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

const Bm: Chord = {
  name: { note: 'B', suffix: 'm' },
  definitions: [ Bm_DEF ],
}

const LOVE_STORY : Song = {
  id: uuid(),
  artists: [
    {
      id: uuid(),
      name: 'Taylor Swift',
    }
  ],
  name: 'Love Story',
  key: {
    note: 'D',
    type: 'major',
  },
  bpm: [119],
}


export const LOVE_STORY_GUITAR_TAB: Tablature = {
    id: uuid(),
    source: '8xg3vE8Ie_E',
    song: LOVE_STORY,
    difficulty: 'beginner',
    tuning: ['E', 'A', 'D', 'G', 'B', 'E'] as unknown as Tuning,
    transposition: { delta: 2, sign: 'negative' },
    type: 'guitar',
    musicUnits: [
        {
            type: 'chord',
            beatDuration: 8,
            self: C,
            syncPoint: new Date(700),
            bpm: 119,
            timeSignature: {
                top: 4,
                bottom: 4,
            },
        },
        { type: 'chord', beatDuration: 8, self: G },
        { type: 'chord', beatDuration: 8, self: Am },
        { type: 'chord', beatDuration: 8, self: F },

        { type: 'chord', beatDuration: 8, self: C },
        { type: 'chord', beatDuration: 8, self: F },
        { type: 'chord', beatDuration: 8, self: Am },
        { type: 'chord', beatDuration: 8, self: F },

        { type: 'chord', beatDuration: 8, self: C },
        { type: 'chord', beatDuration: 8, self: F },
        { type: 'chord', beatDuration: 8, self: Am },
        { type: 'chord', beatDuration: 8, self: G },

        { type: 'chord', beatDuration: 4, self: F },
        { type: 'chord', beatDuration: 4, self: G },
        { type: 'chord', beatDuration: 4, self: Am },
        { type: 'chord', beatDuration: 4, self: C },

        { type: 'chord', beatDuration: 4, self: F },
        { type: 'chord', beatDuration: 4, self: G },
        { type: 'chord', beatDuration: 4, self: Am },
        { type: 'chord', beatDuration: 2, self: F },
        { type: 'chord', beatDuration: 2, self: G },

        { type: 'chord', beatDuration: 8, self: C },
        { type: 'chord', beatDuration: 8, self: G },
        { type: 'chord', beatDuration: 8, self: Am },
        { type: 'chord', beatDuration: 4, self: F },
        { type: 'chord', beatDuration: 4, self: G },

        { type: 'chord', beatDuration: 8, self: C },

        { type: 'chord', beatDuration: 8, self: C },
        { type: 'chord', beatDuration: 8, self: F },
        { type: 'chord', beatDuration: 8, self: Am },
        { type: 'chord', beatDuration: 8, self: G },

        { type: 'chord', beatDuration: 4, self: F },
        { type: 'chord', beatDuration: 4, self: G },
        { type: 'chord', beatDuration: 4, self: Am },
        { type: 'chord', beatDuration: 4, self: C },

        { type: 'chord', beatDuration: 4, self: F },
        { type: 'chord', beatDuration: 4, self: G },
        { type: 'chord', beatDuration: 4, self: Am },
        { type: 'chord', beatDuration: 2, self: F },
        { type: 'chord', beatDuration: 2, self: G },

        { type: 'chord', beatDuration: 8, self: C },
        { type: 'chord', beatDuration: 8, self: G },
        { type: 'chord', beatDuration: 8, self: Am },
        { type: 'chord', beatDuration: 4, self: F },
        { type: 'chord', beatDuration: 4, self: G },

        { type: 'chord', beatDuration: 8, self: C },
        { type: 'chord', beatDuration: 8, self: G },
        { type: 'chord', beatDuration: 8, self: Am },
        { type: 'chord', beatDuration: 4, self: F },
        { type: 'chord', beatDuration: 4, self: G },

        { type: 'chord', beatDuration: 8, self: C },
        { type: 'chord', beatDuration: 8, self: G },
        { type: 'chord', beatDuration: 8, self: Am },
        { type: 'chord', beatDuration: 4, self: F },
        { type: 'chord', beatDuration: 4, self: G },

        { type: 'chord', beatDuration: 4, self: Am },
        { type: 'chord', beatDuration: 4, self: F },
        { type: 'chord', beatDuration: 4, self: C },
        { type: 'chord', beatDuration: 4, self: G },

        { type: 'chord', beatDuration: 4, self: Am },
        { type: 'chord', beatDuration: 4, self: F },
        { type: 'chord', beatDuration: 4, self: C },
        { type: 'chord', beatDuration: 4, self: G },

        { type: 'chord', beatDuration: 8, self: C },
        { type: 'chord', beatDuration: 8, self: G },
        { type: 'chord', beatDuration: 8, self: Am },
        { type: 'chord', beatDuration: 4, self: F },
        { type: 'chord', beatDuration: 4, self: G },

        { type: 'chord', beatDuration: 8, self: D },
        { type: 'chord', beatDuration: 8, self: A },
        { type: 'chord', beatDuration: 8, self: Bm },
        { type: 'chord', beatDuration: 4, self: G },
        { type: 'chord', beatDuration: 4, self: A},

        { type: 'chord', beatDuration: 8, self: D },
        { type: 'chord', beatDuration: 8, self: A },
        { type: 'chord', beatDuration: 8, self: Bm },
        { type: 'chord', beatDuration: 8, self: G },

        { type: 'chord', beatDuration: 8, self: D},

    ]
}
