import { Link } from 'react-router-dom';

import { Tablature } from '@noteable/types';
import { PlayIcon } from '../../../components';
import { FilterHandler } from '../../../hooks';

interface TabProps extends Tablature {
  filterHandler: FilterHandler;
}

export const Tab = ({ id, song: { name, genre, artists } }: TabProps) => {
  const [artist] = artists;

  return (
    <tr>
      <td>
        <Link
          to={'/tab/' + id}
          className="btn btn-secondary btn-xs btn-outline mx-2 w-full"
        >
          <PlayIcon className="h-3 w-3 hidden sm:inline" /> Play!
        </Link>
      </td>
      <td>
        {name} <span className="inline sm:hidden">- {artist.name}</span>
      </td>
      <td className="hidden sm:table-cell">{artist.name}</td>
      <td className="hidden md:table-cell">{genre}</td>
    </tr>
  );
};
