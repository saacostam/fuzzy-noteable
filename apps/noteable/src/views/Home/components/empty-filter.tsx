import { Link } from 'react-router-dom';
import { MagnigyingGlassIcon, XCircleIcon } from '../../../components';

export function EmptyFilter() {
  return (
    <div className="flex flex-col items-center my-16">
      <figure className="bg-secondary rounded-full w-48 h-48 mb-4 flex items-center justify-center">
        <MagnigyingGlassIcon className="w-36 h-36" />
      </figure>
      <h2 className="text-2xl text-center font-semibold">No results found!</h2>
      <p className="text-center mb-4">Adjust your filters and try again.</p>
      <Link to="/" className="btn btn-secondary btn-outline w-64">
        <XCircleIcon /> Reset Filters
      </Link>
    </div>
  );
}
