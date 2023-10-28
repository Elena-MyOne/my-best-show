import React from 'react';
import style from './ShowMoreShowsButton.module.scss';

interface ShowMoreShowsButtonProps {
  showMoreShows: () => void;
  isShowMoreButtonDisable: boolean;
  isMoreShows: boolean;
}

const ShowMoreShowsButton: React.FC<ShowMoreShowsButtonProps> = ({
  showMoreShows,
  isShowMoreButtonDisable,
  isMoreShows,
}) => {
  return (
    <div className={style.more}>
      <button className="button" onClick={showMoreShows} disabled={isShowMoreButtonDisable}>
        {isMoreShows ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

export default ShowMoreShowsButton;
