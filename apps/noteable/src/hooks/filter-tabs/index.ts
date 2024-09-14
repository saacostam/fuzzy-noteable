import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Difficulty,
  Tablature,
  Artist,
  Decade,
  Genre,
  AllDifficulties,
  SortedDecades,
  AllGenres,
} from '@noteable/types';
import { removeDuplicates } from './util';

type FilterTabsOptions = {
  tablatures: Tablature[];
};

export interface FilterState {
  difficulty: Difficulty[];
  artists: string[];
  decade: Decade[];
  genre: Genre[];
}

export interface FilterHandler {
  readonly currentFilterState: FilterState;
  getLink: (state: FilterState) => string;
  copyState: (state: FilterState) => FilterState;
}

export function useFilterTabs({ tablatures }: FilterTabsOptions) {
  const { search, pathname } = useLocation();

  const [currentFilterState, setCurrentFilterState] = useState<FilterState>({
    difficulty: [],
    artists: [],
    decade: [],
    genre: [],
  });

  const [allArtists, setAllArtists] = useState<string[]>([]);

  const doCleanState = useCallback(
    (state: {
      difficulty: unknown;
      artists: unknown;
      decade: unknown;
      genre: unknown;
    }): FilterState => {
      const handleRawParam = <T>(value: unknown, possibilities: T[]): T[] => {
        let cleanValue = (Array.isArray(value) ? value : []) as T[];
        cleanValue = cleanValue.filter((element) =>
          possibilities.includes(element)
        );
        return removeDuplicates(cleanValue);
      };

      return {
        difficulty: removeDuplicates(
          handleRawParam(state.difficulty, AllDifficulties)
        ),
        artists: removeDuplicates(handleRawParam(state.artists, allArtists)),
        decade: removeDuplicates(handleRawParam(state.decade, SortedDecades)),
        genre: removeDuplicates(handleRawParam(state.genre, AllGenres)),
      };
    },
    [allArtists]
  );

  const getLink = useCallback(
    (state: FilterState) => {
      const cleanState = doCleanState(state);

      const searchParams = new URLSearchParams();

      cleanState.difficulty.forEach((oneDifficulty) =>
        searchParams.append('difficulty', oneDifficulty)
      );
      cleanState.artists.forEach((oneArtistName) =>
        searchParams.append('artists', oneArtistName)
      );
      cleanState.decade.forEach((oneDecade) =>
        searchParams.append('decade', oneDecade)
      );
      cleanState.genre.forEach((oneGenre) =>
        searchParams.append('genre', oneGenre)
      );

      return pathname + '?' + searchParams.toString();
    },
    [pathname, doCleanState]
  );

  const copyState = useCallback(
    (state: FilterState): FilterState => ({
      difficulty: [...state.difficulty],
      artists: [...state.artists],
      decade: [...state.decade],
      genre: [...state.genre],
    }),
    []
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(search);

    setCurrentFilterState(
      doCleanState({
        difficulty: searchParams.getAll('difficulty'),
        artists: searchParams.getAll('artists'),
        decade: searchParams.getAll('decade'),
        genre: searchParams.getAll('genre'),
      })
    );
  }, [search, tablatures, doCleanState]);

  useEffect(() => {
    const rawAllArtists = tablatures
      .reduce(
        (allArtists: Artist[], tab) => [...allArtists, ...tab.song.artists],
        []
      )
      .map(({ name }) => name);
    const allArtists = removeDuplicates(rawAllArtists);

    setAllArtists(allArtists);
  }, [tablatures]);

  const filterHandler: FilterHandler = useMemo(
    () => ({
      currentFilterState: currentFilterState,
      getLink: getLink,
      copyState: copyState,
    }),
    [copyState, currentFilterState, getLink]
  );

  let filteredTablatures = tablatures.sort((tab1, tab2) =>
    tab1.song.name.localeCompare(tab2.song.name)
  );

  if (currentFilterState.artists.length > 0)
    filteredTablatures = filteredTablatures.filter((tab) =>
      tab.song.artists.some((oneSongArtist) =>
        currentFilterState.artists.includes(oneSongArtist.name)
      )
    );

  if (currentFilterState.difficulty.length > 0)
    filteredTablatures = filteredTablatures.filter((tab) =>
      currentFilterState.difficulty.includes(tab.difficulty)
    );

  if (currentFilterState.decade.length > 0)
    filteredTablatures = filteredTablatures.filter((tab) =>
      currentFilterState.decade.includes(tab.song.decade!)
    );

  if (currentFilterState.genre.length > 0)
    filteredTablatures = filteredTablatures.filter((tab) =>
      currentFilterState.genre.includes(tab.song.genre!)
    );

  return useMemo(
    () => ({
      allArtists: allArtists,
      filterHandler: filterHandler,
      filteredTablatures: filteredTablatures,
    }),
    [allArtists, filterHandler, filteredTablatures]
  );
}
