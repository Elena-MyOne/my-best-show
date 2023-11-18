import React from 'react';
import { ShowData } from '../models/interfaces';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATHS, URL } from '../models/enums';
import { AppContext } from './AppContext';
// import { useLoadShowsQuery, useSearchShowsQuery } from '../redux/api/apiSlice';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [shows, setShows] = React.useState<ShowData[]>([]); //

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null | unknown>(null); //

  const [switchMoreShows, setSwitchMoreShows] = React.useState<boolean>(false); //

  const [currentPage, setCurrentPage] = React.useState(0); //
  const [nextPage, setNextPage] = React.useState<number | null>(null); //
  const [prevPage, setPrevPage] = React.useState<number | null>(null); //
  const [isCardItemsDarked, setIsCardItemsDarked] = React.useState<boolean>(false); //

  // //============
  // const { data: showsFromRedux } = useLoadShowsQuery(0);
  // console.log(showsFromRedux);

  // const { data: searchShowsFromRedux } = useSearchShowsQuery('girl');
  // console.log(searchShowsFromRedux);
  // //============

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

  const enableButton = () => setSwitchMoreShows(shows.length >= 20);

  const handleSearch = async () => {
    const savedValue = localStorage.getItem('TVShowSearch') || '';

    if (!savedValue) {
      await loadShows(currentPage);
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

  // React.useEffect(() => {
  //   const savedValue = localStorage.getItem('TVShowSearch') || '';
  //   !savedValue ? loadShows(currentPage) : handleSearch();
  //   enableButton();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <AppContext.Provider
      value={{
        handleSearch,
        isLoading,
        error,
        loadShows,
        switchMoreShows,
        currentPage,
        shows,
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
