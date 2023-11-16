import React, { useContext } from 'react';
import style from './Pagination.module.scss';
import { LAST_PAGE } from '../../../../constants/page.constants';
import { AppContext } from '../../../../Contexts/AppContext';

const Pagination: React.FC = () => {
  const [isNextDisabled, setIsNextDisabled] = React.useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = React.useState(false);

  const {
    loadShows,
    switchMoreShows,
    currentPage = 0,
    setCurrentPage,
    prevPage,
    nextPage,
  } = useContext(AppContext);

  const handleNextButton = async () => {
    if (!switchMoreShows && nextPage !== null) {
      if (loadShows && nextPage && setCurrentPage) {
        await loadShows(nextPage);
        setCurrentPage(nextPage);
      }
    }
  };

  const handlePrevButton = async () => {
    if (!switchMoreShows && prevPage !== null && prevPage != undefined) {
      try {
        await loadShows?.(prevPage);
        setCurrentPage?.(prevPage ?? 0);
      } catch (error) {
        console.error('Error loading previous page:', error);
      }
    }
  };

  const handleLast = async () => {
    if (!switchMoreShows && LAST_PAGE) {
      try {
        await loadShows?.(LAST_PAGE);
        setCurrentPage?.(LAST_PAGE ?? 0);
      } catch (error) {
        console.error('Error loading last page:', error);
      }
    }
  };

  React.useEffect(() => {
    setIsNextDisabled(switchMoreShows || nextPage === null || currentPage >= LAST_PAGE);
    setIsPrevDisabled(switchMoreShows || prevPage === null || currentPage === 0);
  }, [switchMoreShows, nextPage, prevPage, currentPage]);

  return (
    <div className={style.buttons}>
      <button className={style.prev} disabled={isPrevDisabled} onClick={handlePrevButton}>
        prev
      </button>

      <button className={style.current}>{currentPage + 1}</button>

      {currentPage < LAST_PAGE && (
        <button className={style.nextCurrent} onClick={handleNextButton}>
          {currentPage + 2}
        </button>
      )}

      {currentPage < LAST_PAGE - 1 && <div className={style.dots}>...</div>}

      {currentPage < LAST_PAGE - 1 && (
        <button className={style.last} onClick={handleLast}>
          {LAST_PAGE + 1}
        </button>
      )}

      <button
        className={style.next}
        disabled={isNextDisabled}
        onClick={handleNextButton}
        data-testid="next"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
