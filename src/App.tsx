import React from 'react';
import { ROUTER_PATHS, URL } from './models/enums';
import { ShowData } from './models/interfaces';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/pages/MainPage/MainPage';
import NotFound from './components/pages/NotFound/NotFound';

const App: React.FC = () => {
  const [shows, setShows] = React.useState<ShowData[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null | unknown>(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [itemsPerPage] = React.useState(20);
  const [isMoreShows, setIsMoreShows] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [isShowMoreButtonDisable, setIsShowMoreButtonDisable] = React.useState<boolean>(false);

  const loadShows = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${URL.SHOWS}?page=${currentPage}`);

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const data: ShowData[] = await response.json();

      setShows(data);
      setCurrentPage(currentPage === 8 ? currentPage - 8 : currentPage + 1);
      setIsLoading(false);
    } catch (error) {
      setShows([]);
      setIsLoading(false);
      setError(error);
    }
  };

  const enableButton = () => {
    if (shows.length >= 20) {
      setIsShowMoreButtonDisable(true);
    } else {
      setIsShowMoreButtonDisable(false);
    }
  };

  const showMoreShows = () => {
    setIsMoreShows((prev) => !prev);
  };

  const getSearchChange = () => {
    const savedValue = localStorage.getItem('TVShowSearch') || '';
    setSearchQuery(savedValue);
  };

  const handleSearch = async () => {
    getSearchChange();

    const savedValue = localStorage.getItem('TVShowSearch') || '';

    if (savedValue === '') {
      loadShows();
      enableButton();
      return;
    }

    try {
      // const response = await fetch(`${URL.SEARCH}${searchQuery}`);
      console.log(searchQuery);
      const response = await fetch(`${URL.SEARCH}${savedValue}`);

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const data: ShowData[] = await response.json();

      setShows(data);
      setIsLoading(false);
      setCurrentPage(0);
    } catch (error) {
      setShows([]);
      setIsLoading(false);
      setError(error);
    }

    enableButton();
  };

  React.useEffect(() => {
    loadShows();
    enableButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentPageItems = shows.slice(0, itemsPerPage);

  return (
    <Routes>
      <Route path={ROUTER_PATHS.MAIN} element={<Layout handleSearch={handleSearch} />}>
        <Route
          index
          element={
            <MainPage
              isLoading={isLoading}
              error={error}
              loadShows={loadShows}
              isShowMoreButtonDisable={isShowMoreButtonDisable}
              currentPage={currentPage}
              isMoreShows={isMoreShows}
              shows={shows}
              currentPageItems={currentPageItems}
              showMoreShows={showMoreShows}
            />
          }
        ></Route>
        <Route path={ROUTER_PATHS.NOTFOUND} element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
