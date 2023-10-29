import React from 'react';

interface PaginationProps {
  loadShows: () => Promise<void>;
  isShowMoreButtonDisable: boolean;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  loadShows,
  isShowMoreButtonDisable,
  currentPage,
}) => {
  return (
    <>
      <button className="button" onClick={loadShows} disabled={isShowMoreButtonDisable}>
        {currentPage === 0 ? 'Go back' : 'Next page'}
      </button>
    </>
  );
};

export default Pagination;
