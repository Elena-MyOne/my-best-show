import React from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import CardItems from './components/CardItems/CardItems';
import { URL } from './models/enums';
import { ShowData } from './models/interfaces';
import { MdReportGmailerrorred } from 'react-icons/md';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

interface AppProps {
  shows: ShowData[];
  isLoading: boolean;
  error: Error | null | unknown;
  currentPage: number;
  itemsPerPage: number;
  isMoreShows: boolean;
  searchQuery: string;
  isShowMoreButtonDisable: boolean;
}

const App: React.FC<AppProps> = () => {
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
    <div className="wrapper">
      <Header handleSearch={handleSearch} value={''} />
      <main className="main">
        <div className="container">
          <ErrorBoundary>
            {isLoading ? (
              <p className={style.loading}>Loading...</p>
            ) : error ? (
              <div className={style.error}>
                <MdReportGmailerrorred />
                <span className={style.text}>Error occurred please try later</span>
              </div>
            ) : (
              <>
                <div className={style.top}>
                  <h1 className="title">TV Shows</h1>
                  {!isLoading && (
                    <button
                      className="button"
                      onClick={loadShows}
                      disabled={isShowMoreButtonDisable}
                    >
                      {currentPage === 0 ? 'Go back' : 'Next page'}
                    </button>
                  )}
                </div>

                {isMoreShows ? <CardItems data={shows} /> : <CardItems data={currentPageItems} />}

                {!isLoading && (
                  <div className={style.more}>
                    <button
                      className="button"
                      onClick={showMoreShows}
                      disabled={isShowMoreButtonDisable}
                    >
                      {isMoreShows ? 'Show less' : 'Show more'}
                    </button>
                  </div>
                )}
              </>
            )}
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
};

export default App;
