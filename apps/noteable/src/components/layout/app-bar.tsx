import { Link } from 'react-router-dom';
import { MusicIcon } from '../icons';

export const ResponsiveAppBar = () => {
  return (
    <div className="navbar shadow bg-base-100">
      <div className="flex-1 flex justify-center">
        <Link className="btn btn-ghost text-xl hover:text-secondary" to="/">
          <MusicIcon />
          Chord Visualizer
        </Link>
      </div>
    </div>
  );
};
