import {useCallback, useMemo} from "react";
import {useCreateArtist, useGetArtists} from "../../../hooks";
import {useForm} from "react-hook-form";

export function useAdminArtists(){
  const {
    doCreateArtist,
    createdArtist,
    isSuccess: createArtistIsSuccess,
    isError: createArtistIsError,
    isLoading: createArtistIsLoading,
    error: createArtistError,
  } = useCreateArtist();

  const {
    artists,
    isSuccess: getArtistsIsSuccess,
    isError: getArtistsIsError,
    isLoading: getArtistsIsLoading,
    error: getArtistsError,
  } = useGetArtists();

  const {
    register: registerCreateArtistForm,
    getValues: getValuesCreateArtistForm,
    resetField: resetFieldCreateArtistForm,
  } = useForm();

  const handleCreateArtist = useCallback(() => {
    const { name } = getValuesCreateArtistForm();
    doCreateArtist({
      artist: {
        name: name
      }
    });
    resetFieldCreateArtistForm('name');
  }, [getValuesCreateArtistForm, doCreateArtist, resetFieldCreateArtistForm]);

  return useMemo(() => {
    return {
      doCreateArtist: handleCreateArtist,
      createdArtist: createdArtist,
      createArtistIsSuccess: createArtistIsSuccess,
      createArtistIsError: createArtistIsError,
      createArtistIsLoading: createArtistIsLoading,
      createArtistError: createArtistError,
      artists: artists,
      getArtistsIsSuccess: getArtistsIsSuccess,
      getArtistsIsError: getArtistsIsError,
      getArtistsIsLoading: getArtistsIsLoading,
      getArtistsError: getArtistsError,
      registerCreateArtistForm: registerCreateArtistForm,
    }
  }, [
    handleCreateArtist,
    createdArtist,
    createArtistIsSuccess,
    createArtistIsError,
    createArtistIsLoading,
    createArtistError,
    artists,
    getArtistsIsSuccess,
    getArtistsIsError,
    getArtistsIsLoading,
    getArtistsError,
    registerCreateArtistForm,
  ]);
}
