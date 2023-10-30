import {useMemo} from "react";
import {useParams} from "react-router-dom";

import {useGetSongsByArtist} from "../../../hooks";

export function useAdminArtistById(){
  const { id } = useParams();
  if (!id) throw new Error('No Id was found. Please check the current URL!');

  const { artistsSongs, isLoading: getSongsByArtistsIsLoading } = useGetSongsByArtist(id);

  return useMemo(() => {
    return {
      artistName: artistsSongs?.name || '',
      artistSongs: artistsSongs?.songs || [],
      getSongsByArtistsIsLoading: getSongsByArtistsIsLoading,
    }
  }, [
    artistsSongs,
    getSongsByArtistsIsLoading,
  ]);
}
