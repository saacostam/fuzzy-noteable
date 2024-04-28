import { Link } from 'react-router-dom';
import { MusicIcon } from '../icons';

export const ResponsiveAppBar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1 flex justify-center">
        <Link
          className="btn btn-ghost text-xl text-white hover:text-secondary"
          to="/"
        >
          <MusicIcon />
          Chord Viewer
        </Link>
      </div>
    </div>
  );
};
