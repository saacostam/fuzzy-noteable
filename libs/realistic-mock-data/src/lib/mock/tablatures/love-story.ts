import { Song, Tablature, Tuning} from '@noteable/types';
import { v4 as uuid } from 'uuid';

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
    transposition: 2,
    type: 'guitar',
    musicUnits: [
        {
            type: 'chord',
            beatDuration: 8,
            self: 'C',
            syncPoint: new Date(700),
            bpm: 119,
            timeSignature: {
                top: 4,
                bottom: 4,
            },
        },
        { type: 'chord', beatDuration: 8, self: 'G' },
        { type: 'chord', beatDuration: 8, self: 'Am' },
        { type: 'chord', beatDuration: 8, self: 'F' },

        { type: 'chord', beatDuration: 8, self: 'C' },
        { type: 'chord', beatDuration: 8, self: 'F' },
        { type: 'chord', beatDuration: 8, self: 'Am' },
        { type: 'chord', beatDuration: 8, self: 'F' },

        { type: 'chord', beatDuration: 8, self: 'C' },
        { type: 'chord', beatDuration: 8, self: 'F' },
        { type: 'chord', beatDuration: 8, self: 'Am' },
        { type: 'chord', beatDuration: 8, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'G' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'C' },

        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'G' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 2, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 8, self: 'C' },
        { type: 'chord', beatDuration: 8, self: 'G' },
        { type: 'chord', beatDuration: 8, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'G' },

        { type: 'chord', beatDuration: 8, self: 'C' },

        { type: 'chord', beatDuration: 8, self: 'C' },
        { type: 'chord', beatDuration: 8, self: 'F' },
        { type: 'chord', beatDuration: 8, self: 'Am' },
        { type: 'chord', beatDuration: 8, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'G' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'C' },

        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'G' },
        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 2, self: 'F' },
        { type: 'chord', beatDuration: 2, self: 'G' },

        { type: 'chord', beatDuration: 8, self: 'C' },
        { type: 'chord', beatDuration: 8, self: 'G' },
        { type: 'chord', beatDuration: 8, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'G' },

        { type: 'chord', beatDuration: 8, self: 'C' },
        { type: 'chord', beatDuration: 8, self: 'G' },
        { type: 'chord', beatDuration: 8, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'G' },

        { type: 'chord', beatDuration: 8, self: 'C' },
        { type: 'chord', beatDuration: 8, self: 'G' },
        { type: 'chord', beatDuration: 8, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'G' },

        { type: 'chord', beatDuration: 4, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'C' },
        { type: 'chord', beatDuration: 4, self: 'G' },

        { type: 'chord', beatDuration: 8, self: 'C' },
        { type: 'chord', beatDuration: 8, self: 'G' },
        { type: 'chord', beatDuration: 8, self: 'Am' },
        { type: 'chord', beatDuration: 4, self: 'F' },
        { type: 'chord', beatDuration: 4, self: 'G' },

        { type: 'chord', beatDuration: 8, self: 'D' },
        { type: 'chord', beatDuration: 8, self: 'A' },
        { type: 'chord', beatDuration: 8, self: 'Bm' },
        { type: 'chord', beatDuration: 4, self: 'G' },
        { type: 'chord', beatDuration: 4, self: 'A'},

        { type: 'chord', beatDuration: 8, self: 'D' },
        { type: 'chord', beatDuration: 8, self: 'A' },
        { type: 'chord', beatDuration: 8, self: 'Bm' },
        { type: 'chord', beatDuration: 8, self: 'G' },

        { type: 'chord', beatDuration: 8, self: 'D'},

    ]
}
