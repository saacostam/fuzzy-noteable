import { LeanSong } from '@noteable/types';

export class CreateSongDto {
  song: LeanSong;
  artistsIDs: string[];
}
