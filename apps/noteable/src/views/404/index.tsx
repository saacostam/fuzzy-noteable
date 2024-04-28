import { Link } from 'react-router-dom';
import { MagnigyingGlassIcon } from '../../components';

export const NotFound404 = () => {
  return (
    <div className="hero my-32">
      <div className="hero-content text-center">
        <div className="max-w-md flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-6">Oops...</h1>
          <MagnigyingGlassIcon />
          <p className="py-6">
            Sorry. We can't find the page you're looking for.
          </p>
          <Link className="btn btn-secondary text-secondary-content" to={'/'}>
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};
