import { Artist } from '@noteable/types';
import { MOCK_DATA } from '../mock-data';

export async function getArtists() {
  return MOCK_DATA.tablatures.map((tab) => tab.song.artists[0]) as Artist[];
}
