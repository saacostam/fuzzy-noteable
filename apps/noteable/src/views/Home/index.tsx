import { useFilterTabs, useGetAllTabs } from '../../hooks';
import { EmptyFilter, Filter, HomeCopy, Tab } from './components';

export function HomeView() {
  const { tablatures } = useGetAllTabs();

  const { filteredTablatures, filterHandler, allArtists } = useFilterTabs({
    tablatures: tablatures,
  });

  return (
    <>
      <HomeCopy />
      <div className="divider mx-6"></div>
      <h2 className="text-lg font-bold mx-6 mb-4">
        Browse Our Song Collection{' '}
        <span className="text-secondary">({filteredTablatures.length})</span>
      </h2>
      <Filter filterHandler={filterHandler} allArtists={allArtists} />
      <div className="px-4">
        {filteredTablatures.length > 0 ? (
          <table className="table border border-base-200 w-100">
            <thead className="bg-base-200 text-secondary">
              <tr>
                <th className="w-28"></th>
                <th>Song</th>
                <th className="hidden sm:table-cell">Artist</th>
                <th className="hidden md:table-cell">Genre</th>
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
