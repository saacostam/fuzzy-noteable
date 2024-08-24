import { Route, Routes } from 'react-router-dom';

import { ResponsiveAppBar } from '../components';
import { TabView, HomeView, NotFound404 } from '../views';

export function App() {
  return (
    <main className="bg-base-200 min-h-lvh">
      <ResponsiveAppBar />
      <div
        className={
          'max-w-[80em] mx-auto shadow rounded-xl p-4 my-4 bg-base-100'
        }
      >
        <Routes>
          <Route path={'/'} element={<HomeView />} />
          <Route path={'/tab/:id'} element={<TabView />} />
          <Route path={'*'} element={<NotFound404 />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
