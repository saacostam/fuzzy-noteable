import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Tablature } from '@noteable/types';
import { FilterIcon, ChevronRightIcon } from '../../../components';
import { FilterHandler } from '../../../hooks';

interface TabProps extends Tablature {
  filterHandler: FilterHandler;
}

export const Tab = ({
  id,
  song: { name, genre, artists },
  filterHandler,
}: TabProps) => {
  const [artist] = artists;

  const addArtistsToFilterUrl = useMemo(() => {
    const { currentFilterState, getLink, copyState } = filterHandler;

    const newFilterState = copyState(currentFilterState);
    newFilterState.artists.push(artist.name);

    return getLink(newFilterState);
  }, [filterHandler, artist]);

  const addGenreToFilterUrl = useMemo(() => {
    const { currentFilterState, getLink, copyState } = filterHandler;

    const newFilterState = copyState(currentFilterState);
    newFilterState.genre.push(genre!);

    return getLink(newFilterState);
  }, [filterHandler.getLink, filterHandler.currentFilterState, genre]);

  return (
    <div className="card w-96 shadow mb-4">
      <div className="card-body p-4">
        <Link
          className="card-title hover:text-secondary hover:ease-in transition duration-100 mb-2"
          to={'/tab/' + id}
        >
          {name} <ChevronRightIcon />
        </Link>

        <div className="stats stats horizontal shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Artist</div>
            <div className="stat-value text-xl mb-1">{artist.name}</div>
            <Link
              className="stat-desc text-secondary flex"
              to={addArtistsToFilterUrl}
            >
              <FilterIcon /> <span className="ml-1">Add to Filter</span>
            </Link>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Genre</div>
            <div className="stat-value text-xl mb-1">{genre}</div>
            <Link
              className="stat-desc text-secondary flex"
              to={addGenreToFilterUrl}
            >
              <FilterIcon /> <span className="ml-1">Add to Filter</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
