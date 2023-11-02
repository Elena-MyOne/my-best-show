import React from 'react';
import style from './MainPage.module.scss';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Loader from '../../Loader/Loader';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import CardItems from '../../CardItems/CardItems';
import { SearchShowsData, ShowData } from '../../../models/interfaces';
import ShowMoreShowsButton from './ShowMoreShowsButton/ShowMoreShowsButton';
import Pagination from './Pagination/Pagination';
import { ITEMS_PER_PAGE } from '../../../constants/page.constants';
import { Outlet } from 'react-router-dom';

interface MainPageProps {
  isLoading: boolean;
  error: Error | null | unknown;
  loadShows: (page: number) => Promise<void>;
  isShowMoreButtonDisable: boolean;
  currentPage: number;
  shows: ShowData[];
  currentPageItems: ShowData[] | SearchShowsData[] | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  prevPage: number | null;
  nextPage: number | null;
}

const MainPage: React.FC<MainPageProps> = ({
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
}) => {
  const [isMoreShows, setIsMoreShows] = React.useState<boolean>(false);

  const showMoreShows = () => {
    setIsMoreShows((prev) => !prev);
    setCurrentPage(0);
    loadShows(0);
  };

  return (
    <>
      <ErrorBoundary>
        <>
          <div className={style.top}>
            <h1 className="title">Shows List</h1>
            {shows.length < ITEMS_PER_PAGE ? null : (
              <Pagination
                loadShows={loadShows}
                isShowMoreButtonDisable={isShowMoreButtonDisable}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                prevPage={prevPage}
                nextPage={nextPage}
              />
            )}
          </div>
        </>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage />
        ) : (
          <>
            <div className={style.content}>
              <div className={style.items}>
                {isMoreShows ? <CardItems data={shows} /> : <CardItems data={currentPageItems} />}
              </div>
              <div className={style.details}>
                <Outlet />
              </div>
            </div>

            {!isLoading && (
              <ShowMoreShowsButton
                showMoreShows={showMoreShows}
                isShowMoreButtonDisable={isShowMoreButtonDisable}
                isMoreShows={isMoreShows}
              />
            )}
          </>
        )}
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
