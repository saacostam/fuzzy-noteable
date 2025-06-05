import { Link } from 'react-router-dom';
import { GithubIcon, MusicIcon } from '../icons';

export const ResponsiveAppBar = () => {
  return (
    <div className="navbar shadow bg-base-100">
      <div className="flex-1 flex justify-between">
        <Link className="btn btn-ghost text-xl hover:text-secondary" to="/">
          <MusicIcon className="text-secondary" />
          Chord Visualizer
        </Link>
        <Link
          className="btn btn-ghost text-md"
          to="https://github.com/saacostam"
          target="_blank"
        >
          <GithubIcon className="text-white w-8 h-8" />
          My Github
        </Link>
      </div>
    </div>
  );
};
