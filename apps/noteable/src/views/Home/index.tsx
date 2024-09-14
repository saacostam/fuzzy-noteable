import { useFilterTabs, useGetAllTabs } from '../../hooks';
import { EmptyFilter, Filter, Tab } from './components';

export function HomeView() {
  const { tablatures } = useGetAllTabs();

  const { filteredTablatures, filterHandler, allArtists } = useFilterTabs({
    tablatures: tablatures,
  });

  return (
    <>
      <h1 className="text-3xl text-center font-bold m-6 text-secondary">
        Master Chords, One Song at a Time!
      </h1>
      <p className="mx-6 mb-4">
        Whether you’re just starting out or already have years of experience,
        our interactive platform is designed to{' '}
        <span className="text-secondary font-semibold">
          support your musical journey at every level.
        </span>{' '}
        With our intuitive chord visualization, you can play along with your
        favorite songs while the chords appear in{' '}
        <span className="text-secondary font-semibold">perfect sync</span> with
        the music. This helps you not only understand each{' '}
        <span className="text-secondary font-semibold">chord’s timing</span> and{' '}
        <span className="text-secondary font-semibold">structure</span> but also
        improves your{' '}
        <span className="text-secondary font-semibold">muscle memory</span> and{' '}
        <span className="text-secondary font-semibold">rhythm skills.</span>
      </p>
      <p className="mx-6 mb-4">
        Hit play on the song you want to learn, and let the music guide you as
        the chords unfold in real-time—making learning faster, easier, and more
        enjoyable!
      </p>
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
