import {Song, Tablature, Tuning, Chord, GuitarChordDefinition} from '@noteable/types';
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

const GOODBYE_MY_LOVER : Song = {
  id: uuid(),
  artists: [
    {
      id: uuid(),
      name: 'James Blunt',
    }
  ],
  name: 'Goodbye My Lover',
  key: {
    note: 'E',
    type: 'major',
  },
  bpm: [90],
}

export const GOODBYE_MY_LOVER_GUITAR_TAB: Tablature = {
    id: uuid(),
    source: 'wVyggTKDcOE',
    song: GOODBYE_MY_LOVER,
    difficulty: 'beginner',
    tuning: ['E', 'A', 'D', 'G', 'B', 'E'] as unknown as Tuning,
    transposition: { delta: 4, sign: 'negative' },
    type: 'guitar',
    musicUnits: [
        {
            type: 'chord',
            beatDuration: 4,
            self: 'Cm',
            syncPoint: new Date(600),
            bpm: 95,
            timeSignature: {
                top: 4,
                bottom: 4,
            },
        },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'Em' },
        { type: 'chord', beatDuration: 2, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'Em' },
        { type: 'chord', beatDuration: 2, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'Em' },
        { type: 'chord', beatDuration: 2, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 8, self: 'C' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'Em' },
        { type: 'chord', beatDuration: 2, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'Em' },
        { type: 'chord', beatDuration: 2, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Em' },
        { type: 'chord', beatDuration: 2, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 6, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'Em' },
        { type: 'chord', beatDuration: 2, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'Em' },
        { type: 'chord', beatDuration: 2, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 8, self: 'C' },
    ]
}
