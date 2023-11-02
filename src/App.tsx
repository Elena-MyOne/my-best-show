import React from 'react';
import { ROUTER_PATHS, URL } from './models/enums';
import { ShowData } from './models/interfaces';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/pages/MainPage/MainPage';
import NotFound from './components/pages/NotFound/NotFound';
import DetailsPage from './components/pages/DetailsPage/DetailsPage';

const App: React.FC = () => {
  const [shows, setShows] = React.useState<ShowData[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null | unknown>(null);
  const [itemsPerPage] = React.useState(20);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [isShowMoreButtonDisable, setIsShowMoreButtonDisable] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState(0);

  const [nextPage, setNextPage] = React.useState<number | null>(null);
  const [prevPage, setPrevPage] = React.useState<number | null>(null);

  const navigate = useNavigate();

  const loadShows = async (page: number) => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${URL.SHOWS}?page=${page}`);

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const data: ShowData[] = await response.json();

      setShows(data);
      setIsLoading(false);
      setNextPage(page + 1);
      setPrevPage(page > 0 ? page - 1 : null);

      navigate(`/${ROUTER_PATHS.SHOWS}?page=${encodeURIComponent(page)}`);
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

  const getSearchChange = () => {
    const savedValue = localStorage.getItem('TVShowSearch') || '';
    setSearchQuery(savedValue);
  };

  const handleSearch = async () => {
    getSearchChange();

    const savedValue = localStorage.getItem('TVShowSearch') || '';

    if (savedValue === '') {
      loadShows(currentPage);
      enableButton();
      return;
    }

    try {
      console.log(searchQuery);
      const response = await fetch(`${URL.SEARCH}${savedValue}`);

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const data: ShowData[] = await response.json();

      setShows(data);
      setIsLoading(false);
      setCurrentPage(0);

      navigate(`/${ROUTER_PATHS.SEARCH}?q=${encodeURIComponent(savedValue)}`);
    } catch (error) {
      setShows([]);
      setIsLoading(false);
      setError(error);
    }

    enableButton();
  };

  React.useEffect(() => {
    const savedValue = localStorage.getItem('TVShowSearch') || '';
    savedValue === '' ? loadShows(currentPage) : handleSearch();
    enableButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentPageItems = shows.slice(0, itemsPerPage);

  const getMainPageProps = () => ({
    isLoading,
    error,
    loadShows,
    isShowMoreButtonDisable,
    currentPage,
    shows,
    currentPageItems,
    setCurrentPage,
    prevPage,
    nextPage,
  });

  return (
    <Routes>
      <Route path={ROUTER_PATHS.MAIN} element={<Layout handleSearch={handleSearch} />}>
        <Route index element={<MainPage {...getMainPageProps()} />}></Route>
        <Route path={ROUTER_PATHS.SHOWS} element={<MainPage {...getMainPageProps()} />}>
          <Route path={ROUTER_PATHS.DETAILS} element={<DetailsPage />} />
        </Route>
        <Route path={ROUTER_PATHS.SEARCH} element={<MainPage {...getMainPageProps()} />}></Route>
        <Route path={ROUTER_PATHS.NOTFOUND} element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
