import React from 'react';
import style from './Pagination.module.scss';
import { LAST_PAGE } from '../../../../models/constants';

interface PaginationProps {
  loadShows: (page: number) => Promise<void>;
  isShowMoreButtonDisable: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  prevPage: number | null;
  nextPage: number | null;
}

const Pagination: React.FC<PaginationProps> = ({
  loadShows,
  isShowMoreButtonDisable,
  currentPage,
  setCurrentPage,
  prevPage,
  nextPage,
}) => {
  const [isNextDisabled, setIsNextDisabled] = React.useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = React.useState(false);

  console.log('Curr', currentPage);
  console.log('Prev', prevPage);
  console.log('next', prevPage);

  const handleNextButton = async () => {
    if (!isShowMoreButtonDisable && nextPage !== null) {
      await loadShows(nextPage);
      setCurrentPage(nextPage);
    }
  };

  const handlePrevButton = async () => {
    if (!isShowMoreButtonDisable && prevPage !== null) {
      await loadShows(prevPage);
      setCurrentPage(prevPage);
    }
  };

  const handleLast = async () => {
    if (!isShowMoreButtonDisable && LAST_PAGE) {
      await loadShows(LAST_PAGE);
      setCurrentPage(LAST_PAGE);
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

      <button className={style.next} disabled={isNextDisabled} onClick={handleNextButton}>
        next
      </button>
    </div>
  );
};

export default Pagination;
