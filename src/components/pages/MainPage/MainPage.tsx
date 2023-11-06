import React, { useContext } from 'react';
import style from './MainPage.module.scss';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Loader from '../../Loader/Loader';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import CardItems from '../../CardItems/CardItems';
import ShowMoreShowsButton from './ShowMoreShowsButton/ShowMoreShowsButton';
import Pagination from './Pagination/Pagination';
import { ITEMS_PER_PAGE } from '../../../constants/page.constants';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ROUTER_PATHS } from '../../../models/enums';
import { AppContext } from '../../../Contexts/AppContext';

const MainPage: React.FC = () => {
  const [isMoreShows, setIsMoreShows] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    isLoading,
    error,
    loadShows,
    shows,
    currentPageItems,
    setCurrentPage,
    setIsCardItemsDarked,
  } = useContext(AppContext);

  const showMoreShows = () => {
    setIsMoreShows((prev) => !prev);
    if (setCurrentPage && loadShows) {
      setCurrentPage(0);
      loadShows(0);
    }
  };

  const closeDetails = () => {
    const path = location.pathname;
    if (path.includes('details')) {
      navigate(`${ROUTER_PATHS.MAIN}`);

      if (setIsCardItemsDarked) {
        setIsCardItemsDarked(false);
      }
    }
  };

  return (
    <>
      <ErrorBoundary>
        <>
          <div className={style.top}>
            <h1 className="title">Shows List</h1>
            {shows && shows.length < ITEMS_PER_PAGE ? null : <Pagination />}
          </div>
        </>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage />
        ) : (
          <>
            <div className={style.content}>
              <div className={style.items} onClick={closeDetails}>
                {isMoreShows ? (
                  <CardItems shows={shows || []} />
                ) : (
                  <CardItems shows={currentPageItems || []} />
                )}
              </div>
              <div className={style.details}>
                <Outlet />
              </div>
            </div>

            {!isLoading && (
              <ShowMoreShowsButton showMoreShows={showMoreShows} isMoreShows={isMoreShows} />
            )}
          </>
        )}
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
