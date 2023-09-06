import {Song, Tablature, Tuning } from '@noteable/types';
import { v4 as uuid } from 'uuid';

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
            self: 'C',
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
