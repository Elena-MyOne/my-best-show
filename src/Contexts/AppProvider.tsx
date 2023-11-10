import React from 'react';
import { ShowData } from '../models/interfaces';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATHS, URL } from '../models/enums';
import { AppContext } from './AppContext';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [shows, setShows] = React.useState<ShowData[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null | unknown>(null);
  const [itemsPerPage] = React.useState(20);
  const [isShowMoreButtonDisable, setIsShowMoreButtonDisable] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [nextPage, setNextPage] = React.useState<number | null>(null);
  const [prevPage, setPrevPage] = React.useState<number | null>(null);
  const [isCardItemsDarked, setIsCardItemsDarked] = React.useState<boolean>(false);

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

  const handleSearch = async () => {
    const savedValue = localStorage.getItem('TVShowSearch') || '';

    if (savedValue === '') {
      loadShows(currentPage);
      enableButton();
      return;
    }

    try {
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

  return (
    <AppContext.Provider
      value={{
        handleSearch,
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
        isCardItemsDarked,
        setIsCardItemsDarked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}