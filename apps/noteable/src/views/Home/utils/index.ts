import { CurrentFilterOptionState } from '../components';
import { FilterState } from '../../../hooks';

export const buildFilterOptions = (state: FilterState) => {
  const allFilters: CurrentFilterOptionState[] = [];

  state.artists.forEach((artist) =>
    allFilters.push({
      type: 'artist',
      value: artist,
    })
  );

  state.difficulty.forEach((difficulty) =>
    allFilters.push({
      type: 'difficulty',
      value: difficulty,
    })
  );

  state.decade.forEach((decade) =>
    allFilters.push({
      type: 'decade',
      value: decade,
    })
  );

  state.genre.forEach((genre) =>
    allFilters.push({
      type: 'genre',
      value: genre,
    })
  );

  return allFilters;
};
