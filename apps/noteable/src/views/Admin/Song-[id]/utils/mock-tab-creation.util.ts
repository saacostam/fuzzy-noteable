import { LeanTablature, Tablature } from '@noteable/types';
import { v4 as uuid } from 'uuid';

const MOCK_SONG_AND_ARTIST = {
  SONG: {
    NAME: 'MOCK SONG',
    BPM: 128,
  },
  ARTISTS: [
    {
      NAME: 'MOCK ARTIST 1',
    },
    {
      NAME: 'MOCK ARTIST 2',
    },
  ],
};

export function mockChordTabCreationUtil(tab: LeanTablature): Tablature {
  return {
    ...tab,
    id: uuid(),
    song: {
      id: uuid(),
      name: MOCK_SONG_AND_ARTIST.SONG.NAME,
      key: 'A minor',
      bpm: [MOCK_SONG_AND_ARTIST.SONG.BPM],
      artists: [
        {
          id: uuid(),
          name: MOCK_SONG_AND_ARTIST.ARTISTS[0].NAME,
        },
        {
          id: uuid(),
          name: MOCK_SONG_AND_ARTIST.ARTISTS[1].NAME,
        },
      ],
    },
  };
}
