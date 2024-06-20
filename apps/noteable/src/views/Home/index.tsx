import { MagnigyingGlassIcon } from '../../components';
import { useFilterTabs, useGetAllTabs } from '../../hooks';
import { Filter, Tab } from './components';

export function HomeView() {
  const { tablatures } = useGetAllTabs();

  const { filteredTablatures, filterHandler, allArtists } = useFilterTabs({
    tablatures: tablatures,
  });

  return (
    <>
      <h1 className="text-xl font-bold m-6">
        All Guitar Tabs{' '}
        <span className="text-secondary">({filteredTablatures.length})</span>
      </h1>
      <Filter filterHandler={filterHandler} allArtists={allArtists} />
      <div className="flex flex-wrap justify-around">
        {filteredTablatures.length > 0 ? (
          filteredTablatures.map((tab) => (
            <Tab {...tab} filterHandler={filterHandler} key={tab.id} />
          ))
        ) : (
          <div className="flex flex-col items-center my-16">
            <h2 className="text-2xl text-center mb-4 font-semibold">
              No results found!
            </h2>
            <MagnigyingGlassIcon />
            <span className="text-center mt-4">
              Try adjusting your filter to find what you're looking for
            </span>
          </div>
        )}
      </div>
    </>
  );
}
