import React from 'react';
import style from './MainPage.module.scss';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Loader from '../../Loader/Loader';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import CardItems from '../../CardItems/CardItems';
import ShowMoreShowsButton from './ShowMoreShowsButton/ShowMoreShowsButton';
import Pagination from './Pagination/Pagination';
import { DEFAULT_ITEMS_PER_PAGE, ITEMS_PER_PAGE } from '../../../constants/page.constants';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ROUTER_PATHS } from '../../../models/enums';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleSearch,
  loadShows,
  selectShows,
  setCurrentPage,
  setIsCardItemsDarked,
  setSwitchMoreShows,
} from '../../../redux/slices/ShowsSlice';
import { AppDispatch } from '../../../redux/store';
import { useLoadShowsQuery, useSearchShowsQuery } from '../../../redux/api/apiSlice';

const MainPage: React.FC = () => {
  const [isMoreShows, setIsMoreShows] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { shows, searchValue, apiCallPage, isLoading } = useSelector(selectShows);
  const dispatch = useDispatch<AppDispatch>();

  const {
    data: showsData,
    isLoading: isLoadingMainPage,
    // isSuccess,
    isError: isLoadingError,
    // error,
  } = useLoadShowsQuery(apiCallPage);
  // console.log('showsData: ', showsData);

  const {
    data: searchShowsData,
    // isLoading,
    // isSuccess,
    isError: isSearchError,
    // error,
  } = useSearchShowsQuery(searchValue);
  console.log('searchShowsData: ', searchShowsData);

  React.useEffect(() => {
    if (searchValue) {
      searchShowsData && dispatch(handleSearch(searchShowsData));
      navigate(`/${ROUTER_PATHS.SEARCH}?q=${encodeURIComponent(searchValue)}`);
    } else {
      showsData && dispatch(loadShows(showsData));
      navigate(`/${ROUTER_PATHS.SHOWS}?page=${encodeURIComponent(apiCallPage)}`);
    }

    dispatch(setSwitchMoreShows(shows.length <= DEFAULT_ITEMS_PER_PAGE));
  }, [searchValue, searchShowsData, showsData, dispatch, navigate, apiCallPage, shows.length]);

  const currentPageItems = shows && shows.slice(0, DEFAULT_ITEMS_PER_PAGE);

  const showMoreShows = () => {
    setIsMoreShows((prev) => !prev);
    dispatch(setCurrentPage(0));
    showsData && dispatch(loadShows(showsData));
  };

  const closeDetails = () => {
    const path = location.pathname;
    if (path.includes('details')) {
      navigate(`${ROUTER_PATHS.MAIN}`);

      dispatch(setIsCardItemsDarked(false));
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
        {isLoadingMainPage || isLoading ? (
          <Loader />
        ) : isLoadingError || isSearchError ? (
          <ErrorMessage />
        ) : (
          <>
            <div className={style.content}>
              <div className={style.items} onClick={closeDetails}>
                {isMoreShows ? <CardItems shows={shows} /> : <CardItems shows={currentPageItems} />}
              </div>
              <div className={style.details}>
                <Outlet />
              </div>
            </div>

            {!isLoadingMainPage && (
              <ShowMoreShowsButton showMoreShows={showMoreShows} isMoreShows={isMoreShows} />
            )}
          </>
        )}
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
