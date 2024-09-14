import { useMemo } from 'react';
import { useFilterTabs, useGetAllTabs } from '../../hooks';
import {
  EmptyFilter,
  Filter,
  HomeCopy,
  Page,
  Pagination,
  Tab,
} from './components';
import { InfoIcon } from '../../components';

export function HomeView() {
  const { data: tablatures, isSuccess, isLoading } = useGetAllTabs();

  const { allArtists, filteredTablatures, filterHandler, totalPages } =
    useFilterTabs({
      tablatures: tablatures || [],
    });
  const { getLink, copyState, currentFilterState } = filterHandler;

  const pages: Page[] = useMemo(() => {
    const pages: Page[] = [];

    for (let i = 0; i < totalPages; i++) {
      const pageNumber = i + 1;

      const newState = {
        ...copyState(currentFilterState),
        page: pageNumber,
      };

      pages.push({
        pageNumber: pageNumber,
        link: getLink(newState),
      });
    }

    return pages;
  }, [copyState, currentFilterState, getLink, totalPages]);

  return (
    <>
      <HomeCopy />
      <div className="divider mx-6"></div>
      <h2 className="text-lg font-bold mx-6 mb-2">
        Browse Our Song Collection{' '}
        <div
          className="tooltip"
          data-tip="Enjoy a selection of some of the most popular songs—perfect for learning and playing along!"
        >
          <InfoIcon className="w-6 h-6 inline pb-1" />
        </div>
      </h2>
      <Filter filterHandler={filterHandler} allArtists={allArtists} />
      <div className="px-4 mb-4">
        {isLoading ? (
          <div className="skeleton h-96"></div>
        ) : isSuccess && filteredTablatures.length > 0 ? (
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
      <section className="mx-4 flex justify-center">
        <Pagination pages={pages} currentPage={currentFilterState.page} />
      </section>
    </>
  );
}
