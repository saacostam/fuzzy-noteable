import { Song, Tablature } from '@noteable/types';
import { v4 as uuid } from 'uuid';

export const GOODBYE_MY_LOVER: Song = {
  id: uuid(),
  artists: [
    {
      id: uuid(),
      name: 'James Blunt',
    },
  ],
  name: 'Goodbye My Lover',
  key: 'E major',
  bpm: [90],
};

export const GOODBYE_MY_LOVER_GUITAR_TAB: Tablature = {
  id: uuid(),
  source: 'wVyggTKDcOE',
  song: GOODBYE_MY_LOVER,
  difficulty: 'beginner',
  tuning: 'E A D G B E',
  transposition: 4,
  type: 'guitar',
  musicUnits: [
    {
      type: 'ch',
      dur: 4,
      self: 'C',
      syncPnt: new Date(600).toString(),
      bpm: 95,
      timeSig: {
        top: 4,
        bottom: 4,
      },
    },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 4, self: 'Em' },
    { type: 'ch', dur: 2, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 4, self: 'Em' },
    { type: 'ch', dur: 2, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 4, self: 'Em' },
    { type: 'ch', dur: 2, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 8, self: 'C' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 4, self: 'Em' },
    { type: 'ch', dur: 2, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 4, self: 'Em' },
    { type: 'ch', dur: 2, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'G' },

    { type: 'ch', dur: 4, self: 'F' },
    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'F' },
    { type: 'ch', dur: 4, self: 'G' },

    { type: 'ch', dur: 4, self: 'F' },
    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Em' },
    { type: 'ch', dur: 2, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 6, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'C' },
    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 4, self: 'Em' },
    { type: 'ch', dur: 2, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 4, self: 'Am' },
    { type: 'ch', dur: 4, self: 'Em' },
    { type: 'ch', dur: 2, self: 'F' },
    { type: 'ch', dur: 2, self: 'G' },

    { type: 'ch', dur: 8, self: 'C' },
  ],
};
