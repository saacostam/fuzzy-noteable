import { Route, Routes } from 'react-router-dom';

import { ResponsiveAppBar } from '../components';
import { TabView, HomeView, NotFound404 } from '../views';

export function App() {
  return (
    <>
      <ResponsiveAppBar />
      <div className={'max-w-[80em] mx-auto bg-neutral rounded-xl p-4 my-4'}>
        <Routes>
          <Route path={'/'} element={<HomeView />} />
          <Route path={'/tab/:id'} element={<TabView />} />
          <Route path={'*'} element={<NotFound404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
