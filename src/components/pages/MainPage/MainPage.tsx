import React from 'react';
import style from './MainPage.module.scss';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Loader from '../../Loader/Loader';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import CardItems from '../../CardItems/CardItems';
import { SearchShowsData, ShowData } from '../../../models/interfaces';
import ShowMoreShowsButton from './ShowMoreShowsButton/ShowMoreShowsButton';
import Pagination from './Pagination/Pagination';

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
  };

  return (
    <>
      <ErrorBoundary>
        <>
          <div className={style.top}>
            <h1 className="title">TV Shows</h1>
            {isLoading ? (
              <div></div>
            ) : (
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
            {isMoreShows ? <CardItems data={shows} /> : <CardItems data={currentPageItems} />}

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
