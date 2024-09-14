import { useFilterTabs, useGetAllTabs } from '../../hooks';
import { EmptyFilter, Filter, Tab } from './components';

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
      <div className="p-4">
        {filteredTablatures.length > 0 ? (
          <table className="table">
            <thead className="bg-base-200 text-secondary">
              <tr>
                <th>Song</th>
                <th className="hidden sm:table-cell">Artist</th>
                <th className="hidden md:table-cell">Genre</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredTablatures.map((tab) => (
                <Tab {...tab} filterHandler={filterHandler} key={tab.id} />
              ))}
            </tbody>
          </table>
        ) : (
          <EmptyFilter />
        )}
      </div>
    </>
  );
}
