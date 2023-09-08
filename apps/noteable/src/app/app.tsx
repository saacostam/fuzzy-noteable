import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NoteableViewer } from "@noteable/react-components";
import {LOVE_STORY_GUITAR_TAB} from "@noteable/realistic-mock-data";
import {ResponsiveAppBar} from "../components";

const HomeView = () => {
  return (
    <NoteableViewer tablature={LOVE_STORY_GUITAR_TAB} mode={'interactive'}/>
  )
}

export function App() {
  return (
    <>
      <ResponsiveAppBar/>
      <div className={'max-w-[80em] mx-auto bg-neutral-100 rounded-xl p-4 my-4'}>
        <Routes>
          <Route
            path="/"
            element={<HomeView/>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
