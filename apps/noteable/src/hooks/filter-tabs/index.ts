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
  page: number;
}

export interface FilterHandler {
  readonly currentFilterState: FilterState;
  getLink: (state: FilterState) => string;
  copyState: (state: FilterState) => FilterState;
}

const DEFAULT_PAGE = 1;
const PAGE_SIZE = 8;

function applyFilters(tablatures: Tablature[], filterState: FilterState) {
  let filteredTablatures = tablatures.sort((tab1, tab2) =>
    tab1.song.name.localeCompare(tab2.song.name)
  );

  if (filterState.artists.length > 0)
    filteredTablatures = filteredTablatures.filter((tab) =>
      tab.song.artists.some((oneSongArtist) =>
        filterState.artists.includes(oneSongArtist.name)
      )
    );

  if (filterState.difficulty.length > 0)
    filteredTablatures = filteredTablatures.filter((tab) =>
      filterState.difficulty.includes(tab.difficulty)
    );
  if (filterState.genre.length > 0)
    filteredTablatures = filteredTablatures.filter((tab) =>
      filterState.genre.includes(tab.song.genre!)
    );

  return filteredTablatures;
}

function getTotalPages(numberOfTablatures: number) {
  return Math.ceil(numberOfTablatures / PAGE_SIZE);
}

export function useFilterTabs({ tablatures }: FilterTabsOptions) {
  const { search, pathname } = useLocation();

  const [currentFilterState, setCurrentFilterState] = useState<FilterState>({
    difficulty: [],
    artists: [],
    decade: [],
    genre: [],
    page: 1,
  });

  const [allArtists, setAllArtists] = useState<string[]>([]);

  const filteredTablatures = useMemo(
    () => applyFilters(tablatures, currentFilterState),
    [currentFilterState, tablatures]
  );

  const totalPages = getTotalPages(filteredTablatures.length);
  const pageTablatures = filteredTablatures.slice(
    (currentFilterState.page - 1) * PAGE_SIZE,
    PAGE_SIZE * currentFilterState.page
  );

  const doCleanState = useCallback(
    (state: {
      difficulty: unknown;
      artists: unknown;
      decade: unknown;
      genre: unknown;
      page: unknown;
    }): FilterState => {
      const handleRawListParam = <T>(
        value: unknown,
        possibilities: T[]
      ): T[] => {
        let cleanValue = (Array.isArray(value) ? value : []) as T[];
        cleanValue = cleanValue.filter((element) =>
          possibilities.includes(element)
        );
        return removeDuplicates(cleanValue);
      };

      const handleRawSingleParam = <T>(
        value: unknown,
        possibilities?: T[],
        defaultValue?: T
      ): T => {
        return (possibilities || []).includes(value as T)
          ? (value as T)
          : ((value || defaultValue) as T);
      };

      const page = Number(handleRawSingleParam(state.page, undefined, 1));

      return {
        difficulty: removeDuplicates(
          handleRawListParam(state.difficulty, AllDifficulties)
        ),
        artists: removeDuplicates(
          handleRawListParam(state.artists, allArtists)
        ),
        decade: removeDuplicates(
          handleRawListParam(state.decade, SortedDecades)
        ),
        genre: removeDuplicates(handleRawListParam(state.genre, AllGenres)),
        page: Number.isNaN(page) ? DEFAULT_PAGE : page,
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

      const newTabs = applyFilters(tablatures, cleanState);
      const newTotalPages = getTotalPages(newTabs.length);

      searchParams.append(
        'page',
        String(Math.min(newTotalPages, cleanState.page))
      );

      return pathname + '?' + searchParams.toString();
    },
    [doCleanState, tablatures, pathname]
  );

  const copyState = useCallback(
    (state: FilterState): FilterState => ({
      difficulty: [...state.difficulty],
      artists: [...state.artists],
      decade: [...state.decade],
      genre: [...state.genre],
      page: state.page,
    }),
    []
  );

  const filterHandler: FilterHandler = useMemo(
    () => ({
      currentFilterState: currentFilterState,
      getLink: getLink,
      copyState: copyState,
    }),
    [copyState, currentFilterState, getLink]
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(search);

    setCurrentFilterState(
      doCleanState({
        difficulty: searchParams.getAll('difficulty'),
        artists: searchParams.getAll('artists'),
        decade: searchParams.getAll('decade'),
        genre: searchParams.getAll('genre'),
        page: searchParams.get('page'),
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

  return useMemo(
    () => ({
      totalPages: totalPages,
      allArtists: allArtists,
      filterHandler: filterHandler,
      filteredTablatures: pageTablatures,
    }),
    [allArtists, filterHandler, pageTablatures, totalPages]
  );
}
