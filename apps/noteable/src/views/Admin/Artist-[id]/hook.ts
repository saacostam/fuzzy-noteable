import {useCallback, useMemo} from "react";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {AllGenres, Key, SortedDecades, SortedNotes, SortedScaleTypes} from "@noteable/types";

import {useGetSongsByArtist, useCreateSong} from "../../../hooks";

export function useAdminArtistById(){
  const { id } = useParams();
  if (!id) throw new Error('No Id was found. Please check the current URL!');

  const {
    artistsSongs,
    isLoading: getSongsByArtistsIsLoading,
    isError: getSongsByArtistsIsError,
  } = useGetSongsByArtist(id);

  const {
    doCreateSong,
    createdSong,
    isLoading: createSongIsLoading,
  } = useCreateSong();

  const {
    register: registerCreateSongForm,
    getValues: getValuesCreateSongForm,
    resetField: resetFieldCreateSongForm,
  } = useForm();

  const handleCreateSong = useCallback(() => {
    const {
      name,
      bpm,
      keyNote,
      keyScaleType,
      decade,
      genre,
    } = getValuesCreateSongForm();

    const key = (`${keyNote} ${keyScaleType}` as Key);

    doCreateSong({
      song: {
        name: name,
        bpm: [Number(bpm)],
        key: key,
        decade: decade,
        genre: genre,
      },
      artistsIDs: [
        id,
      ]
    });

    ['name', 'bpm', 'keyNote', 'keyScaleType', 'decade', 'genre'].forEach(
      inputFieldName => (resetFieldCreateSongForm(inputFieldName))
    )
  }, [
    getValuesCreateSongForm,
    resetFieldCreateSongForm,
    doCreateSong,
    id,
  ]);

  return useMemo(() => {
    return {
      artistName: artistsSongs?.name || '',
      artistSongs: artistsSongs?.songs || [],
      getSongsByArtistsIsLoading: getSongsByArtistsIsLoading,
      getSongsByArtistsIsError: getSongsByArtistsIsError,
      notes: SortedNotes,
      scaleTypes: SortedScaleTypes,
      allDecades: SortedDecades,
      allGenres: AllGenres,
      registerCreateSongForm: registerCreateSongForm,
      doCreateSong: handleCreateSong,
      createdSong: createdSong,
      createSongIsLoading: createSongIsLoading,
    }
  }, [
    artistsSongs,
    getSongsByArtistsIsLoading,
    registerCreateSongForm,
    handleCreateSong,
    createdSong,
    createSongIsLoading,
    getSongsByArtistsIsError,
  ]);
}
