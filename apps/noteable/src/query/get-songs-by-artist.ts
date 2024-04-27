import { Artist, LonelySong } from '@noteable/types';
import { MOCK_DATA } from '../mock-data';

export async function getSongsByArtist(id: string) {
  const songsAndArtists = MOCK_DATA.tablatures.map((tab) => {
    const song: LonelySong = {
      ...tab.song,
    } as LonelySong;

    return {
      song: song,
      artist: tab.song.artists[0],
    };
  });

  const index = songsAndArtists.findIndex((saa) => saa.artist.id === id);
  const artist = songsAndArtists[index].artist;

  const songs = songsAndArtists.reduce(
    (songs: LonelySong[], curr) =>
      curr.artist.id === artist.id ? [...songs, curr.song] : songs,
    []
  );

  return {
    id: artist.id,
    name: artist.name,
    songs: songs,
  } as Artist & { songs: LonelySong[] };
}
