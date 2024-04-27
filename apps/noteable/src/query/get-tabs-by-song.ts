import { LonelyTablature, Song } from '@noteable/types';
import { MOCK_DATA } from '../mock-data';

export async function getTabsBySong(id: string) {
  const tab = MOCK_DATA.tablatures.find((tab) => tab.song.id === id);

  return {
    ...tab?.song,
    tablatures: [tab],
  } as Song & { tablatures: LonelyTablature[] };
}
