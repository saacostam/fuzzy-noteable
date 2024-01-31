import {Song} from "@noteable/types";

export type GetSongTabsByIdDto = Omit<Song, 'artists'> & {
  artistsIDs: string[];
  tablatures: Array<{
    id: string;
  }>
}
