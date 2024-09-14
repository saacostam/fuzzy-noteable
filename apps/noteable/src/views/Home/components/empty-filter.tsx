import { MagnigyingGlassIcon } from '../../../components';

export function EmptyFilter() {
  return (
    <div className="flex flex-col items-center my-16">
      <h2 className="text-2xl text-center mb-4 font-semibold">
        No results found!
      </h2>
      <MagnigyingGlassIcon />
      <span className="text-center mt-4">
        Try adjusting your filter to find what you're looking for
      </span>
    </div>
  );
}
