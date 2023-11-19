import React, { useContext } from 'react';
import style from './Pagination.module.scss';
import { LAST_PAGE } from '../../../../constants/page.constants';
import { AppContext } from '../../../../Contexts/AppContext';

const Pagination: React.FC = () => {
  const [isNextDisabled, setIsNextDisabled] = React.useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = React.useState(false);

  const {
    loadShows,
    isShowMoreButtonDisable,
    currentPage = 0,
    setCurrentPage,
    prevPage,
    nextPage,
  } = useContext(AppContext);

  const handleNextButton = async () => {
    if (!isShowMoreButtonDisable && nextPage !== null) {
      if (loadShows && nextPage && setCurrentPage) {
        await loadShows(nextPage);
        setCurrentPage(nextPage);
      }
    }
  };

  const handlePrevButton = async () => {
    if (!isShowMoreButtonDisable && prevPage !== null) {
      if (loadShows && setCurrentPage && prevPage) {
        await loadShows(prevPage);
        setCurrentPage(prevPage);
      }
    }
  };

  const handleLast = async () => {
    if (!isShowMoreButtonDisable && LAST_PAGE) {
      if (loadShows && setCurrentPage) {
        await loadShows(LAST_PAGE);
        setCurrentPage(LAST_PAGE);
      }
    }
  };

  React.useEffect(() => {
    setIsNextDisabled(isShowMoreButtonDisable || nextPage === null);
    setIsPrevDisabled(isShowMoreButtonDisable || prevPage === null);
  }, [isShowMoreButtonDisable, nextPage, prevPage]);

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
