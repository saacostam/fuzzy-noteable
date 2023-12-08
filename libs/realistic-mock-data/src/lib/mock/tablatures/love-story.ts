import { Song, Tablature} from '@noteable/types';
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
  key: 'D major',
  bpm: [119],
}


export const LOVE_STORY_GUITAR_TAB: Tablature = {
    id: uuid(),
    source: '8xg3vE8Ie_E',
    song: LOVE_STORY,
    difficulty: 'beginner',
    tuning: 'E A D G B E',
    transposition: 2,
    type: 'guitar',
    musicUnits: [
        {
            type: 'ch',
            dur: 8,
            self: 'C',
            syncPnt: new Date(700).toString(),
            bpm: 119,
            timeSig: {
                top: 4,
                bottom: 4,
            },
        },
        { type: 'ch', dur: 8, self: 'G' },
        { type: 'ch', dur: 8, self: 'Am' },
        { type: 'ch', dur: 8, self: 'F' },

        { type: 'ch', dur: 8, self: 'C' },
        { type: 'ch', dur: 8, self: 'F' },
        { type: 'ch', dur: 8, self: 'Am' },
        { type: 'ch', dur: 8, self: 'F' },

        { type: 'ch', dur: 8, self: 'C' },
        { type: 'ch', dur: 8, self: 'F' },
        { type: 'ch', dur: 8, self: 'Am' },
        { type: 'ch', dur: 8, self: 'G' },

        { type: 'ch', dur: 4, self: 'F' },
        { type: 'ch', dur: 4, self: 'G' },
        { type: 'ch', dur: 4, self: 'Am' },
        { type: 'ch', dur: 4, self: 'C' },

        { type: 'ch', dur: 4, self: 'F' },
        { type: 'ch', dur: 4, self: 'G' },
        { type: 'ch', dur: 4, self: 'Am' },
        { type: 'ch', dur: 2, self: 'F' },
        { type: 'ch', dur: 2, self: 'G' },

        { type: 'ch', dur: 8, self: 'C' },
        { type: 'ch', dur: 8, self: 'G' },
        { type: 'ch', dur: 8, self: 'Am' },
        { type: 'ch', dur: 4, self: 'F' },
        { type: 'ch', dur: 4, self: 'G' },

        { type: 'ch', dur: 8, self: 'C' },

        { type: 'ch', dur: 8, self: 'C' },
        { type: 'ch', dur: 8, self: 'F' },
        { type: 'ch', dur: 8, self: 'Am' },
        { type: 'ch', dur: 8, self: 'G' },

        { type: 'ch', dur: 4, self: 'F' },
        { type: 'ch', dur: 4, self: 'G' },
        { type: 'ch', dur: 4, self: 'Am' },
        { type: 'ch', dur: 4, self: 'C' },

        { type: 'ch', dur: 4, self: 'F' },
        { type: 'ch', dur: 4, self: 'G' },
        { type: 'ch', dur: 4, self: 'Am' },
        { type: 'ch', dur: 2, self: 'F' },
        { type: 'ch', dur: 2, self: 'G' },

        { type: 'ch', dur: 8, self: 'C' },
        { type: 'ch', dur: 8, self: 'G' },
        { type: 'ch', dur: 8, self: 'Am' },
        { type: 'ch', dur: 4, self: 'F' },
        { type: 'ch', dur: 4, self: 'G' },

        { type: 'ch', dur: 8, self: 'C' },
        { type: 'ch', dur: 8, self: 'G' },
        { type: 'ch', dur: 8, self: 'Am' },
        { type: 'ch', dur: 4, self: 'F' },
        { type: 'ch', dur: 4, self: 'G' },

        { type: 'ch', dur: 8, self: 'C' },
        { type: 'ch', dur: 8, self: 'G' },
        { type: 'ch', dur: 8, self: 'Am' },
        { type: 'ch', dur: 4, self: 'F' },
        { type: 'ch', dur: 4, self: 'G' },

        { type: 'ch', dur: 4, self: 'Am' },
        { type: 'ch', dur: 4, self: 'F' },
        { type: 'ch', dur: 4, self: 'C' },
        { type: 'ch', dur: 4, self: 'G' },

        { type: 'ch', dur: 4, self: 'Am' },
        { type: 'ch', dur: 4, self: 'F' },
        { type: 'ch', dur: 4, self: 'C' },
        { type: 'ch', dur: 4, self: 'G' },

        { type: 'ch', dur: 8, self: 'C' },
        { type: 'ch', dur: 8, self: 'G' },
        { type: 'ch', dur: 8, self: 'Am' },
        { type: 'ch', dur: 4, self: 'F' },
        { type: 'ch', dur: 4, self: 'G' },

        { type: 'ch', dur: 8, self: 'D' },
        { type: 'ch', dur: 8, self: 'A' },
        { type: 'ch', dur: 8, self: 'Bm' },
        { type: 'ch', dur: 4, self: 'G' },
        { type: 'ch', dur: 4, self: 'A'},

        { type: 'ch', dur: 8, self: 'D' },
        { type: 'ch', dur: 8, self: 'A' },
        { type: 'ch', dur: 8, self: 'Bm' },
        { type: 'ch', dur: 8, self: 'G' },

        { type: 'ch', dur: 8, self: 'D'},

    ]
}
