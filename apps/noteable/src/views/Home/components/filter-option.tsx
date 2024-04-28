import { Link } from 'react-router-dom';

import { FilterHandler } from '../../../hooks';
import { XCircleIcon } from '../../../components';

export interface CurrentFilterOptionState {
  type: 'artist' | 'decade' | 'difficulty' | 'genre';
  value: string;
}

export const FilterOption = ({
  type,
  value,
  filterHandler,
}: CurrentFilterOptionState & {
  filterHandler: FilterHandler;
}) => {
  const { currentFilterState, copyState, getLink } = filterHandler;

  const newState = copyState(currentFilterState);

  switch (type) {
    case 'difficulty':
      newState.difficulty = newState.difficulty.filter(
        (difficulty) => difficulty !== value
      );
      break;
    case 'artist':
      newState.artists = newState.artists.filter((artist) => artist !== value);
      break;
    case 'decade':
      newState.decade = newState.decade.filter((decade) => decade !== value);
      break;
    case 'genre':
      newState.genre = newState.genre.filter((genre) => genre !== value);
      break;
  }

  const newStateLink = getLink(newState);

  return (
    <div className="badge badge-secondary badge-outline py-4 mr-4 border-2 mb-2">
      <Link to={newStateLink} className="text-secondary mr-1">
        <XCircleIcon />
      </Link>
      {type === 'difficulty'
        ? 'Difficulty: '
        : type === 'artist'
        ? 'Artist: '
        : type === 'decade'
        ? 'Decade: '
        : 'Genre: '}
      {value}
    </div>
  );
};
