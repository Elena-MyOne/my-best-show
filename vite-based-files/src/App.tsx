import React from 'react';
import { ROUTER_PATHS } from './models/enums';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/pages/MainPage/MainPage';
import NotFound from './components/pages/NotFound/NotFound';
import DetailsPage from './components/pages/DetailsPage/DetailsPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTER_PATHS.MAIN} element={<Layout />}>
        <Route index element={<MainPage />}></Route>
        <Route path={ROUTER_PATHS.SHOWS} element={<MainPage />}>
          <Route path={ROUTER_PATHS.DETAILS} element={<DetailsPage />} />
        </Route>
        <Route path={ROUTER_PATHS.SEARCH} element={<MainPage />}></Route>
        <Route path={ROUTER_PATHS.NOTFOUND} element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
