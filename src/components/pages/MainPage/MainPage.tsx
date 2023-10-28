import React from 'react';
import style from './MainPage.module.scss';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Loader from '../../Loader/Loader';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import CardItems from '../../CardItems/CardItems';
import { SearchShowsData, ShowData } from '../../../models/interfaces';
import ShowMoreShowsButton from './ShowMoreShowsButton/ShowMoreShowsButton';

interface MainPageProps {
  isLoading: boolean;
  error: Error | null | unknown;
  loadShows: () => Promise<void>;
  isShowMoreButtonDisable: boolean;
  currentPage: number;
  shows: ShowData[];
  currentPageItems: ShowData[] | SearchShowsData[] | null;
}

const MainPage: React.FC<MainPageProps> = ({
  isLoading,
  error,
  loadShows,
  isShowMoreButtonDisable,
  currentPage,
  shows,
  currentPageItems,
}) => {
  const [isMoreShows, setIsMoreShows] = React.useState<boolean>(false);

  const showMoreShows = () => {
    setIsMoreShows((prev) => !prev);
  };

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
