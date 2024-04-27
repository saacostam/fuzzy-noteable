import { Route, Routes } from 'react-router-dom';

import { ResponsiveAppBar } from '../components';
import { AdminTabsView, HomeView } from '../views';

export function App() {
  return (
    <>
      <ResponsiveAppBar />
      <div
        className={'max-w-[80em] mx-auto bg-neutral-100 rounded-xl p-4 my-4'}
      >
        <Routes>
          <Route path={'/tab/:id'} element={<HomeView />} />
          <Route path={'/admin/tabs'} element={<AdminTabsView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
