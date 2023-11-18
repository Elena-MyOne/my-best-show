import React from 'react';
import style from './Pagination.module.scss';
import { LAST_PAGE } from '../../../../constants/page.constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import {
  loadShows,
  selectShows,
  setApiCallPage,
  setCurrentPage,
  setIsIsLoading,
} from '../../../../redux/slices/ShowsSlice';
import { useLoadShowsQuery } from '../../../../redux/api/apiSlice';

const Pagination: React.FC = () => {
  const [isNextDisabled, setIsNextDisabled] = React.useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = React.useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const {
    nextPage,
    prevPage,
    currentPage = 0,
    switchMoreShows,
    apiCallPage,
  } = useSelector(selectShows);

  const { data: showsData, isLoading: isLoadingOnPagination } = useLoadShowsQuery(apiCallPage);

  React.useEffect(() => {
    dispatch(setIsIsLoading(isLoadingOnPagination));
  }, [dispatch, isLoadingOnPagination]);

  const handleNextButton = async () => {
    if (!switchMoreShows && nextPage !== null) {
      dispatch(setApiCallPage(nextPage));
      showsData && dispatch(loadShows(showsData));
      dispatch(setCurrentPage(nextPage));
    }
  };

  const handlePrevButton = async () => {
    if (!switchMoreShows && prevPage !== null && prevPage != undefined) {
      dispatch(setApiCallPage(prevPage));
      showsData && dispatch(loadShows(showsData));
      dispatch(setCurrentPage(prevPage));
    }
  };

  const handleLast = async () => {
    if (!switchMoreShows && LAST_PAGE) {
      dispatch(setApiCallPage(LAST_PAGE));
      showsData && dispatch(loadShows(showsData));
      dispatch(setCurrentPage(LAST_PAGE ?? 0));
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
