import React from 'react';
import style from './MainPage.module.scss';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Loader from '../../Loader/Loader';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import CardItems from '../../CardItems/CardItems';
import { SearchShowsData, ShowData } from '../../../models/interfaces';

interface MainPageProps {
  isLoading: boolean;
  error: Error | null | unknown;
  loadShows: () => Promise<void>;
  isShowMoreButtonDisable: boolean;
  currentPage: number;
  isMoreShows: boolean;
  shows: ShowData[];
  currentPageItems: ShowData[] | SearchShowsData[] | null;
  showMoreShows: () => void;
}

const MainPage: React.FC<MainPageProps> = ({
  isLoading,
  error,
  loadShows,
  isShowMoreButtonDisable,
  currentPage,
  isMoreShows,
  shows,
  currentPageItems,
  showMoreShows,
}) => {
  return (
    <>
      <ErrorBoundary>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage />
        ) : (
          <>
            <div className={style.top}>
              <h1 className="title">TV Shows</h1>
              {!isLoading && (
                <button className="button" onClick={loadShows} disabled={isShowMoreButtonDisable}>
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
    </>
  );
};

export default MainPage;
