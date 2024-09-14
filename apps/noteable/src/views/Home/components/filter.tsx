import { Link, useNavigate } from 'react-router-dom';

import { XCircleIcon } from '../../../components';
import { FilterHandler } from '../../../hooks';
import { CurrentFilterOptionState, FilterOption } from './filter-option';
import { buildFilterOptions } from '../utils';
import {
  AllDifficulties,
  AllGenres,
  Decade,
  Difficulty,
  Genre,
} from '@noteable/types';
import { ChangeEvent } from 'react';

const EMPTY = '___';

interface FilterProps {
  filterHandler: FilterHandler;
  allArtists: string[];
}

export const Filter = ({ filterHandler, allArtists }: FilterProps) => {
  const { currentFilterState, copyState, getLink } = filterHandler;

  const navigate = useNavigate();

  const allFilters: CurrentFilterOptionState[] = buildFilterOptions(
    currentFilterState
  ).sort((a, b) => a.value.localeCompare(b.value));

  const getSelectOnChangeHandler =
    (type: 'artist' | 'decade' | 'difficulty' | 'genre') =>
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;

      if (value === EMPTY) return;

      const newState = copyState(currentFilterState);

      switch (type) {
        case 'artist':
          newState.artists.push(value);
          break;
        case 'decade':
          newState.decade.push(value as Decade);
          break;
        case 'difficulty':
          newState.difficulty.push(value as Difficulty);
          break;
        case 'genre':
          newState.genre.push(value as Genre);
          break;
      }

      e.target.value = EMPTY;
      navigate(getLink(newState));
    };

  return (
    <>
      <div className="flex flex-wrap m-4">
        <select
          className="select mr-2 mb-2 bg-base-200"
          onChange={getSelectOnChangeHandler('artist')}
        >
          <option value={EMPTY} defaultChecked>
            Artist
          </option>
          {allArtists.map((artist) => (
            <option value={artist}>{artist}</option>
          ))}
        </select>

        <select
          className="select mr-2 mb-2 bg-base-200"
          onChange={getSelectOnChangeHandler('difficulty')}
        >
          <option value={EMPTY} defaultChecked>
            Difficulty
          </option>
          {AllDifficulties.map((difficulty) => (
            <option value={difficulty}>{difficulty}</option>
          ))}
        </select>

        <select
          className="select mr-2 mb-2 bg-base-200"
          onChange={getSelectOnChangeHandler('genre')}
        >
          <option value={EMPTY} defaultChecked>
            Genre
          </option>
          {AllGenres.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </select>
      </div>
      {allFilters.length > 0 ? (
        <section className="border-2 border-secondary flex m-4 p-4 pb-2 rounded-2xl">
          <div className="flex-1 flex flex-wrap">
            {allFilters.map((filterOption) => (
              <FilterOption {...filterOption} filterHandler={filterHandler} />
            ))}
          </div>
          <div className="flex-0">
            <Link to={'/'} className="text-secondary">
              <XCircleIcon />
            </Link>
          </div>
        </section>
      ) : null}
    </>
  );
};
